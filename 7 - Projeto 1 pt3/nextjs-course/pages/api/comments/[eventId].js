import { connectDatabase, insertDocument, getAllDocuments, } from "../../../components/data/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Falha em conectar com o banco de dados." });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res
        .status(422)
        .json({
          message: "Algo deu errado! Verifique seus dados e tente novamente",
        });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res
        .status(201)
        .json({ message: "Comentário adicionado!", comment: newComment });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Algo deu errado inserindo os dados. ${err}` });
      client.close();
      return;
    }
  } else if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 }, {eventId});
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: "Erro dando fetch nos comentários" });
    }
  }

  client.close();
}
