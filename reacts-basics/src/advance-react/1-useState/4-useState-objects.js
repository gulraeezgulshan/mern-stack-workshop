import React from "react";

const UseStateObjects = () => {
  const obj = {
    name: "Saleem",
    age: 25,
    message: "hello world",
  };

  //[], {}, "", undefined
  //const [person, setPerson] = React.useState({});

  const [person, setPerson] = React.useState(obj);
  console.log(person);

  const handleChange = () => {
    //setPerson("This is a changed message");
    /* setPerson({
      name: "Saleem",
      age: 25,
      message: "This is a changed message",
    }); */
    //setPerson({ message: "This is a changed message" });

    setPerson({ ...obj, message: "This is a changed message" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button type="button" onClick={handleChange}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObjects;
