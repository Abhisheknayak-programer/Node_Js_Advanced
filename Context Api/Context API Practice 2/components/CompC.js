import React from "react";
import { FirstName, SomeData } from "../App";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (<SomeData.Consumer>
            {(data) => {
                return <h1>Hello my name is {fname.myname} and I am a {data.job}</h1>;
            }}
          </SomeData.Consumer>) 
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
