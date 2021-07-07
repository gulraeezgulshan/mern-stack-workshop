import React from "react";

const url = "https://api.github.com/users";

const UseEffectApi = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Github users</h3>
      <table border={1}>
        <tr>
          <td>S#</td>
          <td>Login</td>
          <td>Type</td>
          <td>URL</td>
          <td>Avatar</td>
        </tr>
        {users.map((user, index) => {
          const { id, login, avatar_url, type, url } = user;
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{login}</td>
              <td>{type}</td>
              <td>{url}</td>
              <td>
                <img height={50} src={avatar_url} />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UseEffectApi;
