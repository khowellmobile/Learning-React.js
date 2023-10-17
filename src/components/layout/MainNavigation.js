import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import QuoteContext from "../../store/quote-context";

function MainNavigation(props) {

  const quoteCtx = useContext(QuoteContext);

  return (
    <div className={classes.mainNavDiv}>
      <nav>
        <ul>
          <li>
            <button className={classes.btn} onClick={() => {quoteCtx.setQuote('Courage')}}>Courage</button>
          </li>
          <li>
            <button className={classes.btn} onClick={() => {quoteCtx.setQuote('Humor')}}>Humor</button>
          </li>
          <li>
            <button className={classes.btn} onClick={() => {quoteCtx.setQuote('Love')}}>Love</button>
          </li>
          <li>
            <button className={classes.btn} onClick={() => {quoteCtx.setQuote('Success')}}>Success</button>
          </li>
          <li>
            <button className={classes.btn} onClick={() => {quoteCtx.setQuote('Inspirational')}}>Inspirational</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
