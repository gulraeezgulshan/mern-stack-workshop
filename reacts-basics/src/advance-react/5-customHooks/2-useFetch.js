import React, { useCallback } from "react";
//We are creating custom hook - useFetch

//It is custom hook named as useFetch
export const useFetch = (url) => {
  const [data, setData] = React.useState([]);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, [url]);

  /*   const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
 */
  React.useEffect(() => {
    getData();
  }, [url, getData]);

  return { data };
};
