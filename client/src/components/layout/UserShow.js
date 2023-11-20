import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const UserShow = (props) => {
  const [user, setUser] = useState({});

  const { id, name, style, location, bio, website } = user;
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
};

export default UserShow;
