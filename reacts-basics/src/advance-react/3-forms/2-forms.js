import React from "react";

const Forms = () => {
  /* const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState(""); */

  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name; //firstName
    const value = e.target.value; //aptech
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log("Form Submitted");
    console.log(person.firstName, person.lastName, person.email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name: </label>
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          type="text"
          value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          className="form-control"
          type="text"
          value={person.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="text"
          value={person.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Forms;
