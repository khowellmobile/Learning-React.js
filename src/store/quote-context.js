import { createContext, useState, useEffect } from "react";

const QuoteContext = createContext({
  category: "default",
  quoteText: "default",
  authorText: "default",
  setQuote: () => {},
});

export function QuoteContextProvider(props) {
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quoteText, setQuoteText] = useState("Please Select a Quote Category");
  const [authorText, setAuthorText] = useState("Kent Howell");

  function setQuote(catName) {
    setSelectedCategory(() => {
      return catName;
    });
    setCount(() => {
      return count + 1;
    });
  }

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=" + selectedCategory, {
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
        setQuoteText(data[0]["quote"]);
        setAuthorText(data[0]["author"]);
      });
  }, [selectedCategory, count]);

  const context = {
    category: selectedCategory,
    quoteText: quoteText,
    authorText: authorText,
    setQuote: setQuote,
  };

  return (
    <QuoteContext.Provider value={context}>
      {props.children}
    </QuoteContext.Provider>
  );
}

export default QuoteContext;
