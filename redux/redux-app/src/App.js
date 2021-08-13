import React from "react";
import { increment, decrement } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input type="text" value={myState} />
        <button
          type="button"
          onClick={() => {
            dispatch(increment(5));
          }}
        >
          +
        </button>
        <button
          type="button"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default App;
