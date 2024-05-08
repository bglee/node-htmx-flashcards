import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { FlashCard } from "./types/FlashCard";

export const mapToFlashCard = (
  data: Record<string, AttributeValue>,
): FlashCard => {
  return {
    question: data.question.S || "",
    answer: data.answer.S || "",
    card_id: data.card_id.S || "",
  };
};
