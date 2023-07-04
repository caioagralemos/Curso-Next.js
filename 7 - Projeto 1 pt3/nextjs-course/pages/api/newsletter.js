import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;

    function buildFilePath() {
        return path.join(process.cwd(), "data", "emails.json");
      }
      
    function extractFeedback(filePath) {
        const fileData = fs.readFileSync(filePath);
        var data = JSON.parse(fileData);
        return data;
    }

    const filePath = buildFilePath();
    var data = extractFeedback(filePath);
    if (data.includes(email)) {
        res
        .status(500)
        .json({ message: "Erro: Email já registrado"});
    } else if (!email.includes('@') || email == "" || email == " ") {
        res
        .status(500)
        .json({ message: "Erro: Email inválido"});
    } else {
        data.push(email);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res
        .status(200)
        .json({ message: "Registrado com Sucesso!", email: email});
    }
  }
}
