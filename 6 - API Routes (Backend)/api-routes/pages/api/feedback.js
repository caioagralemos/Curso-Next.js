import { v4 } from "uuid";
import fs from "fs";
import { buildFilePath, extractFeedback } from "../../components/helpers/api-helpers";

export default function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;
    const feedbackText = req.body.feedback;

    const newFeedback = {
      id: v4(),
      email: email,
      text: feedbackText,
    };

    // guardando os dados
    const filePath = buildFilePath();
    var data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "Feedback registrado!", feedback: newFeedback });
  } else {
    const filePath = buildFilePath();
    var data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
