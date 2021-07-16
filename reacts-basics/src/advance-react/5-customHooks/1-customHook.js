import React from "react";
import { useFetch } from "./2-useFetch";

const url = "http://course-api.com/javascript-store-products";

const CustomHook = () => {
  const { data } = useFetch(url);
  console.log(data);

  return <div></div>;
};

export default CustomHook;
