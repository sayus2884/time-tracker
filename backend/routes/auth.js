import { Router } from "express";
import { getUserByName } from "../db/Users";

const router = Router();

router.post("/login", async (req, res, next) => {
  try {
    const { name } = req.body;

    const user = await getUserByName(name);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
});

export default router;
