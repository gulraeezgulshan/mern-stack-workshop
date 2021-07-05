import React from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <h3>Counter</h3>
      <h1 style={{ color: "red" }}>{value}</h1>
      <button
        type="button"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseStateCounter;
