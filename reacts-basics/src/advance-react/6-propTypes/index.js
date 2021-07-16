import React from "react";
import { useFetch } from "../5-customHooks/2-useFetch";
import Product from "./Product";

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { data } = useFetch(url);

  return (
    <div>
      <h2>Products</h2>
      <section>
        {data.map((p) => {
          return <Product key={p.id} {...p} />;
        })}
      </section>
    </div>
  );
};

export default Index;
