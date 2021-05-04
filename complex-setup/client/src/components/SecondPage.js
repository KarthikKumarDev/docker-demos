import React from "react";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div>
      I am the second page!
      <Link to="/"> Go back to home</Link>
    </div>
  );
};

export default SecondPage