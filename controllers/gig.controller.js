import Gig from "../models/gig.model.js";

export const createGig = async (req, res) => {
  if (!req.isSeller)
    return res.status(403).send("Only sellers can create a gig");

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(200).json(savedGig);
  } catch (error) {
    res.status(403).send(error);
  }
};
