import { getDatabase } from "./mongo";

const collectionName = "Users";

export const getUsers = async () => {
  const db = await getDatabase();
  const selector = {};

  const users = await db.collection(collectionName).find(selector).toArray();

  return users;
};
