import {
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import AWS from "aws-sdk";
import { FlashCard } from "./types/FlashCard";
import { mapToFlashCard } from "./mappers";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region: "us-east-2",
});

const client = new DynamoDBClient({ region: "us-east-2" });

const docClient = DynamoDBDocumentClient.from(client);

export const listFlashCards = async (): Promise<Array<FlashCard>> => {
  const command = new ScanCommand({
    TableName: "simple_flash_cards",
    ConsistentRead: true,
  });

  const response = await docClient.send(command);

  return response.Items?.map(mapToFlashCard) || [];
};

export async function getFlashCard(id: string) {
  const command = new GetItemCommand({
    TableName: "simple_flash_cards",
    Key: { card_id: { S: id } },
  });
  const response = await docClient.send(command);

  return response.Item && mapToFlashCard(response.Item);
}

export const deleteFlashCard = async (id: string) => {
  const command = new DeleteItemCommand({
    TableName: "simple_flash_cards",
    Key: {
      card_id: { S: id },
    },
  });

  await docClient.send(command);
};

export async function createFlashCard(body: FlashCard) {
  const command = new PutItemCommand({
    TableName: "simple_flash_cards",
    Item: {
      card_id: { S: body.card_id },
      question: { S: body.question },
      answer: { S: body.answer },
    },
  });
  await docClient.send(command);

  return body;
}
