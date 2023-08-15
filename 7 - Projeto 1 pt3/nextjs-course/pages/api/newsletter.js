import { connectDatabase, insertDocument } from "../../components/data/db-util";

export default async function handler(req, res) {
  let client;
  const email = req.body.email;
  try {
    client = await connectDatabase()
  } catch(err) {
    res.status(500).json({ message: "Falha em conectar com o banco de dados." });
    return;
  }

  if (req.method == "POST") {
    if (!email.includes("@") || email == "" || email == " ") {
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
  } else if (req.method == 'GET') {
    res.status(500).json({ message: "Tente fazer um post request." });
  }
}
