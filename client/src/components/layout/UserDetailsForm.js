import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./ErrorList";

const UserDetailsForm = (props) => {
  const [user, setUser] = useState({
    name: "",
    location: "",
    bio: "",
    style: "",
    website: "",
  });

  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const updateUserForm = async (event) => {
    try {
      const response = await fetch(`/api/v1/users/${props.user.id}`, {
        method: "PATCH",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setShouldRedirect(true);
    } catch (error) {
      console.error(`Error in updateUserForm Fetch: ${error.message}`);
    }
  };
  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    updateUserForm();
  };

  if (shouldRedirect) {
    return <Redirect push to="/profile" />;
  }

  return (
    <div className="grid-container">
      <h6>Update Artist Details:</h6>
      <ErrorList errors={errors} />
      <form onSubmit={handleOnSubmit}>
        <label>
          {" "}
          Name
          <input type="text" name="name" onChange={handleInputChange} value={user.name} />
        </label>
        <label>
          {" "}
          Location
          <input type="text" name="location" onChange={handleInputChange} value={user.location} />
        </label>
        <label>
          {" "}
          Website
          <input type="text" name="website" onChange={handleInputChange} value={user.website} />
        </label>
        <label>
          {" "}
          Bio
          <input type="text" name="bio" onChange={handleInputChange} value={user.bio} />
        </label>

        <label>
          Style
          <input type="text" name="style" onChange={handleInputChange} value={user.style} />
        </label>
        <input type="submit" name="Submit" value="Update Artist Info" />
      </form>
    </div>
  );
};

export default UserDetailsForm;
