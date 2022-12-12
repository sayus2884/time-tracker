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
  const selector = { username: username };

  const users = await db.collection(collectionName).findOne(selector);

  return users;
};

export const insertUser = async (username) => {
  const db = await getDatabase();

  if (!username) throw new Error("username is required.");

  const newUser = db
    .collection(collectionName)
    .insertOne({
      username,
    })
    .then((res) => db.collection(collectionName).findOne({ _id: res.insertedId }));

  return newUser;
};
