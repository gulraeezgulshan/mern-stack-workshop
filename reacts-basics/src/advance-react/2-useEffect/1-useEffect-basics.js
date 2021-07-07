import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  //All hooks to be defined within component body

  const [value, setValue] = useState(0);
  const sample = 10;

  //useEffect is a side-effect

  //useEffect(effect(), deps)
  //effect => function
  //deps => array (dependency array)

  useEffect(() => {
    console.log("1 useEffect Called rendered....");
  }, [value]);

  useEffect(() => {
    console.log("2 useEffect Called rendered....");
  }, [sample]);

  useEffect(() => {
    console.log("3 useEffect Called rendered....");
  }, []);

  console.log("Component rendered....");

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me !</button>
    </>
  );
};

export default UseEffectBasics;
