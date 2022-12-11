import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const users = [{ name: "John Doe", company: "Anon", id: 1 }];

  res.send(users);
});

export default router;
