import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TattooShow from "./TattooShow";

const UserShow = (props) => {
  const [user, setUser] = useState({});

  const { id, name, style, location, bio, website, image } = user;
  const { id: userId } = useParams();

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      const user = body.user;
      setUser(user);
    } catch (err) {
      console.error(`Error in fetch ${err.message}`);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user">
      <h1 className="page-header cell small-9">{name}</h1>
      <ul>
        <img width="100px" src={image} />
        <li>{location}</li>
        <li>
          <a href={`${website}`}> go to {name}'s website </a>
        </li>
      </ul>
      <TattooShow user={user} />
    </div>
  );
};

export default UserShow;
