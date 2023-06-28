import path from "path";
import fs from 'fs';

export function buildFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  var data = JSON.parse(fileData);
  return data;
}
