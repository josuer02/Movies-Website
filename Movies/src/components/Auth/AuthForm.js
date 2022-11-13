import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import AuthContext from "../../store/Auth-Context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoQGH_VGfCOjgoTTY6wpQig-tfrmJmBvo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoQGH_VGfCOjgoTTY6wpQig-tfrmJmBvo";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
             if (data && data.error && data.error.message) {
               errorMessage = data.error.message;
             }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        localStorage.setItem('email', data.email)
        navigate("/");
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1 data-testid='h1'>{isLogin ? "Login" : "Registrarse"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email" data-testid='textoCorreo' >Ingresa tu correo</label>
          <input type="email" id="email" data-testid='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password" data-testid='textoPw'>Ingresa tu contraseña</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            data-testid='password'
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button data-testid='btnSubmit'>{isLogin ? "Login" : "Crear cuenta"}</button>}
          {isLoading && (
            <p>
              <Loader />
            </p>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
            data-testid='hover'
          >
            {isLogin ? "Registrarse" : "Ingresar con una cuenta existente"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
