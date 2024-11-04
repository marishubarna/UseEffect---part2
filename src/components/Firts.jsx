import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Firts = () => {
  const [first, setfirst] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setfirst(json);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2>{first.title}</h2>
      <button></button>
    </div>
  );
};

export default Firts;
