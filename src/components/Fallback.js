import React from "react";
import { Link } from "react-router-dom"

function Fallback() {
  return (
    <div>
      <h1>404 Error: this url does not exist</h1>
      <Link to="/">click here to go home</Link>
    </div>
  );
}

export default Fallback;
