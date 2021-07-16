import React from "react";

//UseContext => Provider/Consumer

const PersonContext = React.createContext(); //ContextAPI

const UseContextBasics = () => {
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
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Prop Drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const data = React.useContext(PersonContext);
  return (
    <>
      {data.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const data = React.useContext(PersonContext);
  return (
    <>
      <h4>{name}</h4>
      <button onClick={() => data.removePerson(id)}>remove</button>
    </>
  );
};

export default UseContextBasics;
