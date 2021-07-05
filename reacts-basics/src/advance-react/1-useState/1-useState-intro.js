import React from "react";

const UseEffectIntro = () => {
  let title = "sample title";

  const handleClick = () => {
    title = "hello world";
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

export default UseEffectIntro;
