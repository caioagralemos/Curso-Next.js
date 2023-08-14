import { MongoClient } from "mongodb";

async function connectDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://caio:8501@nextjs-course.zwmahox.mongodb.net/events?retryWrites=true&w=majority"
    );
  
    return client;
  }
  
async function insertDocument(client, collection, document) {
    const db = client.db()
  
    await db.collection(collection).insertOne(document)
  }

export {insertDocument, connectDatabase}