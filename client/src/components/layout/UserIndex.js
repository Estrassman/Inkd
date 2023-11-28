import React, { useState, useEffect } from "react";
import UserTile from "./UserTile.js";

const UserIndex = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("/api/v1/users");
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      const newUsers = body.users;
      setUsers(newUsers);
    } catch (err) {
      console.error(`Error in Fetch, ${err.message}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userTiles = users.map((user) => {
    return <UserTile key={user.id} user={user} />;
  });

  return (
    <div className="grid-x grid-margin-x not-nav">
      <h1 className="page-header cell small-9">Artists</h1>
      {userTiles}
    </div>
  );
};

export default UserIndex;
