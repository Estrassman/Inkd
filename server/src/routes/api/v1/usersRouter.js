import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";
import uploadImage from "../../../services/uploadImage.js";

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

usersRouter.patch("/:id", uploadImage.single("image"), async (req, res) => {
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

export default usersRouter;
