import { useState, createContext } from "react";

const CollectionsContext = createContext();

const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        setCollections,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export { CollectionsContext, CollectionsProvider };
