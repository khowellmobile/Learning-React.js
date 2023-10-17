import { useContext } from "react";
import classes from "./Quote.module.css";
import QuoteContext from "../../store/quote-context";

function Quote() {

  const quoteCtx = useContext(QuoteContext);

  return (
    <div className={classes.quoteDiv}>
      <div>
        <h1 className={classes.quoteText}>{quoteCtx.quoteText}</h1>
      </div>
      <div className={classes.quoteAuthor}>
        <h3>-{quoteCtx.authorText}</h3>
      </div>
    </div>
  );
}
export default Quote;
