import React from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((p) => {
        return (
          <h4>
            {p.name}
            <Link to={`/person/${p.id}`}>See More</Link>
            {/* <Link to="/person/2">See More</Link> */}
          </h4>
        );
      })}
    </div>
  );
};

export default People;
