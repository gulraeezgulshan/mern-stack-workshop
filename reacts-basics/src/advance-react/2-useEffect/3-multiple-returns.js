import React from "react";

const url = "https://api.github.com/users/gulraizgulshan2k18";

const MultipleReturns = () => {
  const [user, setUser] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
        }
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.log(error));

    //fetch() returns promise
    //console.log(fetch(url));
  }, []);

  if (isError) {
    return <>Error ...</>;
  }

  return <>{user}</>;
};

export default MultipleReturns;
