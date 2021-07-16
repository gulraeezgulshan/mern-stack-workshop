import React from "react";

const PropDrilling = () => {
  const data = [
    { id: 1, name: "ali" },
    { id: 2, name: "khan" },
    { id: 3, name: "saba" },
    { id: 4, name: "farhan" },
  ];

  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id != id);
    });
  };

  return (
    <div>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </>
  );
};

export default PropDrilling;
