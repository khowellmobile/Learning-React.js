import classes from "./Quote.module.css";

function Quote() {
  return (
    <div className={classes.quoteDiv}>
      <h1 className={classes.quoteText}>
        Select a Quote type to receive a quote
      </h1>
    </div>
  );
}

export default Quote;
