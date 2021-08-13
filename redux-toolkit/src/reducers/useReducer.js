import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  tea: 20,
  color: "pink",
  isFridge: false,
  oven: "dawlance",
};

/* export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEA":
      return { ...state, tea: action.payload };

    default:
      return state;
  }
}; */

export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_TEA", (state, action) => {
    state.tea = action.payload;
  });
});
