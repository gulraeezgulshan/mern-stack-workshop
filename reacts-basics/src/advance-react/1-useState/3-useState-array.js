import React from "react";

const UseStateArray = () => {
  const data = [
    { id: 1, name: "ali" },
    { id: 2, name: "john" },
    { id: 3, name: "saleem" },
    { id: 4, name: "anil" },
  ];

  //const [people, setPeople] = React.useState([]);

  const [people, setPeople] = React.useState(data);
  console.log(people);

  const handleRemove = (id) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
    console.log(newPeople);
  };

  return (
    <>
      {people.map((p) => {
        const { id, name } = p;
        return (
          <div
            style={{ border: "1px solid red", padding: "5px", margin: "5px" }}
            key={id}
          >
            <h4>{name}</h4>
            <button type="button" onClick={() => handleRemove(id)}>
              remove item
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
      <button type="button" onClick={() => setPeople(data)}>
        Show All
      </button>
    </>
  );
};

export default UseStateArray;
