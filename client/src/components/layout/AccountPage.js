import React, { useState, useEffect } from "react";
import NewImageForm from "./NewImageForm.js";
import UserDetailsForm from "./UserDetailsForm.js";
import { Link } from "react-router-dom";

const AccountPage = ({ user, setCurrentUser }) => {
  return (
    <div className="grid-container">
      <h2>Account Details</h2>
      <h5>Email: {user.email}</h5>
      <img width="100px" src={user.image} />
      <NewImageForm user={user} setCurrentUser={setCurrentUser} />
      <UserDetailsForm user={user} setCurrentUser={setCurrentUser} />
      <Link to={`/profile/tattoo`}>Add Tattoos</Link>
    </div>
  );
};

export default AccountPage;
