import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="user">
      <h1>Welcome to Inkd!</h1>
      <h4> For tattoo artists to display their designs and the stories behind them</h4>
      <Link to="/users" className="profile-button">
        View Artists
      </Link>
    </div>
  );
};
export default Welcome;
