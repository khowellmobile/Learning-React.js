import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <button className={classes.btn}>Hello</button>
          </li>
          <li>
            <button className={classes.btn}>Hello</button>
          </li>
          <li>
            <button className={classes.btn}>Hello</button>
          </li>
          <li>
            <button className={classes.btn}>Hello</button>
          </li>
          <li>
            <button className={classes.btn}>Hello</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
