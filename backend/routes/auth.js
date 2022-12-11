import { Router } from "express";
import { getUserByName } from "../db/Users";

const router = Router();

// Login just by name; no password needed
router.post("/login", async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = await getUserByName(username);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
});

export default router;
