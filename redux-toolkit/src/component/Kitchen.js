import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Kitchen = () => {
  const { tea, color, isFridge, oven } = useSelector((state) => {
    return state;
  });

  const changeTea = (value) => {
    dispatch({ type: "UPDATE_TEA", payload: value });
  };

  const dispatch = useDispatch();
  return (
    <>
      <h1>Tea: {tea}</h1>
      <h1>Color: {color}</h1>
      <h1>Fridge: {isFridge ? "Yes" : "No"}</h1>
      <h1>Oven: {oven}</h1>

      <button type="button" onClick={() => changeTea(50)}>
        Change Tea
      </button>
    </>
  );
};

export default Kitchen;
