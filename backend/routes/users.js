import { Router } from "express";
import { getUsers } from "../db/Users";

const router = Router();

router.get("/", async (req, res) => {
  const users = await getUsers();

  console.log(users);

  res.json(users);
});

export default router;
