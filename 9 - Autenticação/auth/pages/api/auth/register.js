import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res
        .status(422)
        .json({
          message: "Algo deu errado com os seus dados. Tente novamente",
        });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db("auth").collection("accounts");

    if (db.find({'email': email})) {
        res.status(422)
        .json({
          message: "Esse email já está sendo utlizado :/",
        });
      return;
    }

    const hashedPassword = hashPassword(password);

    const result = await db.insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuário criado com sucesso!", result });
  }
}
