import React, { useContext } from "react";
import { SomeContextData } from "../context/dataContext";

const CompX = () => {
  const someData = useContext(SomeContextData);
  console.log(someData);

  return <></>;
};

export default CompX;
