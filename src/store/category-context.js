import { createContext, useState } from "react";

const CategoryContext = createContext({
  category: "default",
  setCategory: (catName) => {},
  getCategory: () => {},
});

export function CategoryContextProvider(props) {
  const [selectedCategory, setSelectedCategory] = useState("");


  function setCategoryContextHandler(catName) {
    setSelectedCategory((catName) => {return catName})
  }

  function getCategoryContextHandler() {
    return selectedCategory;
  }

  const context = {
    category: selectedCategory,
    setCategory: setCategoryContextHandler,
    getCategory: getCategoryContextHandler,
  };

  return (
    <CategoryContext.Provider value={context}>
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
