import { Router } from "express";
import { getUsers, insertUser } from "../db/Users";

const router = Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await getUsers();

  res.json(users);
});

router.post("/", async (req, res) => {
  const { username } = req.body;
  const newUser = await insertUser(username);

  res.json(newUser);
});

export default router;
