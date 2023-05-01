import express from "express";
import { verifyToken } from "../middleware/jwt";
import { createGig } from "../controllers/gig.controller";

const router = express.Router();

router.post("/", verifyToken, createGig);

export default router;
