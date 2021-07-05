import React, { useState } from "react";

const UseEffectSolution = () => {
  // [2,3,5,1]
  // ["sample", 12, f, {}, [[]]]

  //let title = "sample title";
  //console.log(useState);
  //console.log(useState());
  //console.log(useState("hello"));

  /*   const stateValue = useState("hello")[0];
  const actionFunc = useState("hello")[1];

  console.log(stateValue);
  console.log(actionFunc); */

  //const [a, b] = [1, 2];
  /* const [value, setValue] = useState("hello"); //[value, func]

  console.log(value);
  console.log(setValue); */

  const [title, imran] = useState("sample title");

  const handleClick = () => {
    //title = "hello world";
    imran("hello world");
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseEffectSolution;
