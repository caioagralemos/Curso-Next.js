import {
  buildFilePath,
  extractFeedback,
} from "../../components/helpers/api-helpers";

export default function handler(req, res) {
  const feedbackId = req.query.id;
  const filePath = buildFilePath();
  var data = extractFeedback(filePath);
  const specificData = data.filter(d => d.id == feedbackId)
  res.status(200).json({ feedback: specificData });
}
