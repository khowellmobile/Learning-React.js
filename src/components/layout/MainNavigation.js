import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import CategoryContext from "../../store/category-context";

function MainNavigation(props) {
 
  const categoryCtx = useContext(CategoryContext);

  function categoryHandler(catName) {
    categoryCtx.setCategory(catName);
  }

  return (
    <div className={classes.mainNavDiv}>
      <nav>
        <ul>
          <li>
            <button className={classes.btn} onClick={categoryHandler('Courage')}>Courage</button>
          </li>
          <li>
            <button className={classes.btn}>btn2</button>
          </li>
          <li>
            <button className={classes.btn}>btn3</button>
          </li>
          <li>
            <button className={classes.btn}>btn4</button>
          </li>
          <li>
            <button className={classes.btn}>btn5</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
