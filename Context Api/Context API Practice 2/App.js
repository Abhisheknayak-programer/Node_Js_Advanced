import React, { createContext } from "react";
import CompA from "./components/CompA";
import CompX from "./components/CompX";

const FirstName = createContext();
const SomeData = createContext();

const App = () => {
  return (
    <div>
      <FirstName.Provider value={{ myname: "Abhishek Nayak" }}>
        <SomeData.Provider value={{job : 'React Developer'}}>
          <CompA />
          <CompX />
        </SomeData.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default App;
export {FirstName, SomeData};