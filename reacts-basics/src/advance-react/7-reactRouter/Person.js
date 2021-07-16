import React from "react";
import { useParams, Link } from "react-router-dom";

const Person = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <Link to="/people">Back to people</Link>
    </div>
  );
};

export default Person;
