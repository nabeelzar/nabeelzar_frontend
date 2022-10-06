import React, { useState } from "react";
import "./project.scss";

const Project = () => {
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  if (count % 5 === 0) {
    return (
      <div className="projectContainer">
        <h1>SPECIAL COUNT IS DIVISIBLE BY 5</h1>
        <h2>Current count is: {count}</h2>
        <button onClick={updateCount}>Update</button>
      </div>
    );
  }
  return (
    <div className="projectContainer">
      <h1>Project Page</h1>
      <h2>Current count is: {count}</h2>
      <button onClick={updateCount}>Update</button>
    </div>
  );
};

export default Project;
