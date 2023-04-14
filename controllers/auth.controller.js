import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send("New user has been registered");
  } catch (error) {
    res
      .status(500)
      .send("Sorry, something went wrong. Please try again later.");
  }
};
