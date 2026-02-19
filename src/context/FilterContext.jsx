import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedTitle, setSelectedTitle] = useState("");

  return (
    <FilterContext.Provider value={{ selectedTitle, setSelectedTitle }}>
      {children}
    </FilterContext.Provider>
  );
}
