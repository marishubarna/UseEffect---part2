import React from "react";
import { useState, useEffect } from "react";
const Second = () => {
  const [time, settime] = useState();
  useEffect(() => {
    const Interval = setInterval(() => {
      const date = new Date();
      settime(date.toISOString());
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Second;
