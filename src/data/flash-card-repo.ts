import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

import AWS from "aws-sdk";
import { FlashCard } from "./types/FlashCard";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region: "us-east-2"
});

const client = new DynamoDBClient({ region: "us-east-2" });

const docClient = DynamoDBDocumentClient.from(client);

export const getFlashCards = async (): Promise<Array<FlashCard>> => {
  const command = new ScanCommand({
    TableName: "simple_flash_cards",
    ConsistentRead: true,
  });


  const response = await docClient.send(command);

  return response.Items as Array<FlashCard>;
};
