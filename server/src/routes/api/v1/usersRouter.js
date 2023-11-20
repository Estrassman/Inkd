import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const user = await User.query();
    return res.status(200).json({ user: user });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

usersRouter.post("/", async (req, res) => {
  const { email, name, location, password, passwordConfirmation } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, name, location, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
});

export default usersRouter;
