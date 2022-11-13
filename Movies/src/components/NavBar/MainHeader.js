import { NavLink, Link, useNavigate } from "react-router-dom";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/Auth-Context";
import { useContext } from "react";
const MainHeader = () => {
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  function handleClick() {
    navigate("/login");
  }
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login")
  };
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/home">
        Ez-Movies
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <>
              <li>
                <NavLink activeClassName={classes.active} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/cartelera">
                  Cartelera
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/promociones">
                  Promociones
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/reservas">
                  Reservas
                </NavLink>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li>
                <NavLink activeClassName={classes.active} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/cartelera">
                  Cartelera
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/promociones">
                  Promociones
                </NavLink>
              </li>

              <li>
                <button onClick={handleClick}>Login</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
