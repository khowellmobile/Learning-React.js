import classes from "./Quote.module.css";

function Quote() {
  return (
    <div className={classes.quoteDiv}>
      <div>
        <h1  className={classes.quoteText}>
          Select a Quote type to receive a quote
        </h1>
      </div>
      <div className={classes.quoteAuthor}>
        <h3>-kent howell</h3>
      </div>
    </div>
  );
}
export default Quote;
