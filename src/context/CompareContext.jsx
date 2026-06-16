import { createContext, useContext, useState, useEffect } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState(() => {
  const savedCompare = localStorage.getItem("compareItems");
  return savedCompare ? JSON.parse(savedCompare) : [];
});
useEffect(() => {
  localStorage.setItem(
    "compareItems",
    JSON.stringify(compareItems)
  );
}, [compareItems]);

  const addToCompare = (product) => {
    const exists = compareItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      setCompareItems([...compareItems, product]);
    }
  };

  const removeFromCompare = (id) => {
    setCompareItems(
      compareItems.filter((item) => item.id !== id)
    );
  };

  const isInCompare = (id) => {
    return compareItems.some((item) => item.id === id);
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () =>
  useContext(CompareContext);