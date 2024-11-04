import React from "react";
import { useState, useEffect } from "react";
const Fouth = () => {
  const [dateOf, setDateOf] = useState(() => {
    const saveDate = localStorage.getItem("name");
    return saveDate ? JSON.parse(saveDate) : "";
  });

  return (
    <div>
      <h1>{dateOf}</h1>
    </div>
  );
};

export default Fouth;
