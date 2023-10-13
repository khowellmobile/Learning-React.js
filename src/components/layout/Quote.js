import { useEffect, useState, useContext } from "react";
import classes from "./Quote.module.css";
import CategoryContext from "../../store/category-context";

function Quote() {
  const [quoteText, setQuoteText] = useState("Please Select a Quote Category");
  const [authorText, setAuthorText] = useState("Kent Howell");

  const categoryCtx = useContext(CategoryContext);

  const category = categoryCtx.getCategory();

    useEffect(() => {
      fetch("https://api.api-ninjas.com/v1/quotes?category=courage", {
        method: "GET",
        headers: {
          "X-Api-Key": "/zG8fTmvMWXUXk146pgAjg==7NkZydOkpYONpdmO",
          "Content-Type": "application/json",
          'mode': 'no-cors'
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setQuoteText(data[0]["quote"]);
          setAuthorText(data[0]["author"]);
        });
    }, [category]);

  return (
    <div className={classes.quoteDiv}>
      <div>
        <h1 className={classes.quoteText}>{quoteText}</h1>
      </div>
      <div className={classes.quoteAuthor}>
        <h3>-{authorText}</h3>
      </div>
    </div>
  );
}
export default Quote;
