import classes from "./MainNavigation.module.css";

function MainNavigation(props) {

  return (
    <div className={classes.mainNavDiv}>
      <nav>
        <ul>
          <li>
            <button className={classes.btn}>Courage</button>
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
