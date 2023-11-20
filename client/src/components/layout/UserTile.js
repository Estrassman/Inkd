import React from "react";
import { Link } from "react-router-dom";

const UserTile = (props) => {
  const { id, name, style, location, website, bio } = props.user;

  return (
    <div className="tile-style cell small-4 not-nav">
      <h3 className="tile-name">Name: {name}</h3>
      <p className="tile-bio">Bio: {bio}</p>
      <p className="tile-bio">Style: {style}</p>
      <p className="tile-list location">Location: {location}</p>
      <p className="tile-list location">Website: {website}</p>
      <Link to={`/users/${id}`}>Learn more </Link>
    </div>
  );
};

export default UserTile;
