import React from "react";

const ShortCircuit = () => {
  //const [text, setText] = React.useState("");
  //const [isError, setIsError] = React.useState(false);

  //const firstValue = "Some Value" || <h4>Hello World</h4>;

  //const secondValue = true && <h4>Hello World</h4>;

  const [status, setStatus] = React.useState(true);

  return (
    <>
      //Short-circuit operator
      {status && <h1>Hello World !!</h1>}
      <button
        type="button"
        onClick={() => {
          setStatus(true);
        }}
      >
        Show
      </button>
      <button
        type="button"
        onClick={() => {
          setStatus(false);
        }}
      >
        Hide
      </button>
      <button
        type="button"
        onClick={() => {
          setStatus(!status);
        }}
      >
        //Ternary Operator
        {status ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default ShortCircuit;
