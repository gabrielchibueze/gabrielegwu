import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGODB_URI);
let db;

export async function connectToDb(dbName) {
  if (!db) {
    await client.connect();
    db = client.db(dbName); // Get the services database
  }
  return db;
}
