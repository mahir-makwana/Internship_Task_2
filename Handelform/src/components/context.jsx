import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    education: { school: "", degree: "", year: "" },
    contact: { phone: "", email: "", github: "", linkedin: "" },
  });

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};
