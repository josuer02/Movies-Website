import { NavLink, Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

import { useNavigate } from "react-router-dom";
const MainHeader = () => {
  let navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    navigate("/home");
  }
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/home">
        Movies.com
      </Link>
      <nav>
        <ul>
          {localStorage.getItem("user-info") ? (
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
                <button onClick={Logout}>Logout</button>
              </li>
            </>
          ) : (
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
                <NavLink activeClassName={classes.active} to="/register">
                  Registrate
                </NavLink>
              </li>
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
