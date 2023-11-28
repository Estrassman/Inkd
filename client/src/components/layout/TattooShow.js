import React, { useState, useEffect } from "react";

const TattooShow = ({ user }) => {
  const [tattoos, setTattoos] = useState([]);

  const getTattoos = async () => {
    try {
      const response = await fetch("/api/v1/tattoos");
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      const newTattoos = body.tattoos;
      setTattoos(newTattoos);
    } catch (err) {
      console.error(`Error in Fetch, ${err.message}`);
    }
  };

  useEffect(() => {
    getTattoos();
  }, []);

  const allTattoos = tattoos.map((tattoo) => {
    if (tattoo.userId === user.id) {
      return <img width="200px" src={tattoo.image} />;
    }
  });
  return <div>{allTattoos}</div>;
};
export default TattooShow;
