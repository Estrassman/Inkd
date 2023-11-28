import React, { useState, useEffect } from "react";
import NewTattooForm from "./NewTattooForm.js";
import TattooShow from "./TattooShow.js";

const AccountTattooPage = ({ user }) => {
  return (
    <div className="grid-container">
      <h2>Tattoos</h2>
      <NewTattooForm />
      <TattooShow user={user} />
    </div>
  );
};

export default AccountTattooPage;
