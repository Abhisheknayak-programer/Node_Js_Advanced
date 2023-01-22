import { createContext, useState } from "react";

const SomeContextData = createContext();

const dataContext = (props) => {
  // const [someData, setSomeData] = useState({
  //   data: "I Love Coding in JavaScript",
  // });

  return (
    <SomeContextData.Provider value={{ data: "I Love Coding in JavaScript",}}>
      {props.children}
    </SomeContextData.Provider>
  );
};

export default dataContext;
export { SomeContextData };
