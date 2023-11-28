import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="user">
      <h1>Welcome to Inkd!</h1>
      <h4> For tattoo artists to display their designs and the stories behind them</h4>
      <p>
        <Link to={`/users`}>Get Inkin' </Link>
      </p>
    </div>
  );
};
export default Welcome;
