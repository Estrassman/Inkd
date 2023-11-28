import express from "express";
import { Tattoo } from "../../../models/index.js";
import { ValidationError } from "objection";
import uploadImage from "../../../services/uploadImage.js";

const tattoosRouter = new express.Router();

tattoosRouter.get("/", async (req, res) => {
  try {
    const tattoos = await Tattoo.query();
    return res.status(200).json({ tattoos: tattoos });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

tattoosRouter.post("/", uploadImage.single("image"), async (req, res) => {
  const currentUserId = req.user.id;
  try {
    const data = req.file?.location;
    const persistedTattoo = await Tattoo.query().insertAndFetch({
      image: data,
      userId: currentUserId,
    });
    return res.status(201).json({ tattoo: persistedTattoo });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

export default tattoosRouter;
