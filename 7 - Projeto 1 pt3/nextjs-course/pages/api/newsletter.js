import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;

    const client = await MongoClient.connect(
      "mongodb+srv://caio:8501@nextjs-course.zwmahox.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("newsletter");

    if (db.collection("emails").includes(email)) {
      res.status(500).json({ message: "Erro: Email já registrado" });
    } else if (!email.includes("@") || email == "" || email == " ") {
      res.status(500).json({ message: "Erro: Email inválido" });
    } else {
      db.collection("emails").insertOne({ email: email });
      res
        .status(200)
        .json({ message: "Registrado com Sucesso!", email: email });
    }

    client.close()
  }
}
