import React, { createContext, useState } from "react";

export const MaterialContext = createContext();

const MaterialProvider = ({ children }) => {
  const [materials, setMaterials] = useState([
    { name: "nuris", lastName: "Abdimalikov", age: "18", id: 1 },
  ]);

  const getUser = async (id) => {
    try {
      const response = await fetch(
        `https://10206c1e63ebd7a0.mokky.dev/project/${id}`
      );
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MaterialContext.Provider value={{ materials, setMaterials ,getUser}}>
      {children}
    </MaterialContext.Provider>
  );
};

export default MaterialProvider;
