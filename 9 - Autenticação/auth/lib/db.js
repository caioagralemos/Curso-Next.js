import { MongoClient } from "mongodb";

async function connectToDatabase() {
    const connectionURL = `mongodb+srv://${process.env.db_user}:${process.env.db_key}@nextjs-course.zwmahox.mongodb.net/?retryWrites=true&w=majority`
    const client = await MongoClient.connect(connectionURL)

    return client
}

export {connectToDatabase}