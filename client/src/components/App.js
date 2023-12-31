import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import UserIndex from "./layout/UserIndex";
import UserShow from "./layout/UserShow";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import AccountPage from "./layout/AccountPage";
import Welcome from "./layout/Welcome";
import AccountTattooPage from "./layout/AccountTattooPage";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/users" component={UserIndex} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/users/:id" component={UserShow} />
        <AuthenticatedRoute
          exact
          path="/profile"
          component={AccountPage}
          user={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <AuthenticatedRoute
          exact
          path="/profile/tattoo"
          component={AccountTattooPage}
          user={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Switch>
    </Router>
  );
};

export default hot(App);
