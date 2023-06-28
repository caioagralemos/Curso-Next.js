import { v4 } from "uuid";
import fs from "fs";
import path from "path";

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
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    var data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "Feedback registrado!", feedback: newFeedback });
  } else {
    res.redirect('/')
  }
}
