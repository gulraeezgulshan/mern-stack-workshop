import React from "react";

const Forms = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log("Form Submitted");
    console.log(firstName, lastName, email);
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
          value={firstName}
          onChange={(e) => {
            console.log(e.target.value);
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          className="form-control"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          id="email"
          name="email"
          className="form-control"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Forms;
