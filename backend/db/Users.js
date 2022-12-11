import { getDatabase } from "./mongo";

const collectionName = "Users";

export const getUsers = async () => {
  const db = await getDatabase();
  const selector = {};

  const users = await db.collection(collectionName).find(selector).toArray();

  return users;
};

export const getUserByName = async (username) => {
  if (!username) throw new Error("username is required.");

  const db = await getDatabase();
  const selector = { name: username };

  const users = await db.collection(collectionName).findOne(selector);

  return users;
};
