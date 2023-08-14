import { connectDatabase, insertDocument } from "../../components/data/db-util";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;

    try {
      const client = await connectDatabase()
    } catch(err) {
      res.status(500).json({ message: "Falha em conectar com o banco de dados." });
      return;
    }

    if (client.db().collection("emails").includes(email)) {
      res.status(500).json({ message: "Erro: Email já registrado" });
      return;
    } else if (!email.includes("@") || email == "" || email == " ") {
      res.status(500).json({ message: "Erro: Email inválido" });
      return;
    }
    
    try {
    await insertDocument(client, 'newsletter', { email: email });
    client.close()
    } catch (err) {
      res.status(500).json({ message: "Algo deu errado inserindo os dados." });
      return;
    }

    res.status(200).json({ message: "Registrado com Sucesso!", email: email });
  }
}
