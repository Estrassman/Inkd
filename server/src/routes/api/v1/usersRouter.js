import express from "express";
import passport from "passport";
import { ValidationError } from "objection";
import { User } from "../../../models/index.js";
import uploadImage from "../../../services/uploadImage.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.query();
    return res.status(200).json({ users: users });
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

    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

usersRouter.patch("/:id/image", uploadImage.single("image"), async (req, res) => {
  try {
    const data = req.file?.location;
    const updatedUser = await req.user.$query().patchAndFetch({
      image: data,
    });
    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

usersRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id:", id);
  try {
    const user = await User.query().findById(id);
    console.log("User:", user);
    return res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

usersRouter.patch("/:id", async (req, res) => {
  const formInput = req.body;
  console.log(formInput);
  try {
    const updatedUser = await req.user.$query().patchAndFetch(formInput);
    return res.status(201).json({ user: updatedUser });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});
export default usersRouter;
