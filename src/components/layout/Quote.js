import { useEffect, useState } from "react";
import classes from "./Quote.module.css";

function Quote() {
  const [quoteText, setQuoteText] = useState('Select a Quote type to receive a quote');
  const [authorText, setAuthorText] = useState('Kent Howell');


  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=courage", {
      method: "GET",
      headers: {
        "X-Api-Key": "/zG8fTmvMWXUXk146pgAjg==7NkZydOkpYONpdmO",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0]['quote']);
        setQuoteText(data[0]['quote']);
        setAuthorText(data[0]['author']);
      });
  }, []);

  return (
    <div className={classes.quoteDiv}>
      <div>
        <h1 className={classes.quoteText}>
          {quoteText}
        </h1>
      </div>
      <div className={classes.quoteAuthor}>
        <h3>-{authorText}</h3>
      </div>
    </div>
  );
}
export default Quote;
