import React from "react";
import { Link } from "react-router-dom";

const UserTile = (props) => {
  const { id, name, style, location, website, bio, image } = props.user;

  return (
    <div className="tile-style cell small-4 not-nav">
      <h3 className="tile-name">{name}</h3>
      <img src={image} />
      <Link to={`/users/${id}`}>See {name}'s page</Link>
    </div>
  );
};

export default UserTile;
