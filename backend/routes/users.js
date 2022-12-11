import { Router } from "express";
import { getUsers } from "../db/Users";

const router = Router();

router.get("/", async (req, res) => {
  // const users = [{ name: "John Doe", company: "Anon", id: 1 }];

  const users = await getUsers();

  console.log(users);

  res.json(users);
});

export default router;
