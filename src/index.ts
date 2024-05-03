// src/index.js
import express, { Request, Response } from "express";
import { createElement, renderToHtml } from "jsxte";
import { FlashCardList } from "./pages/flashcardlist/FlashCardList";
import dotenv from "dotenv";
import { getFlashCards } from "./data/flash-card-repo";
import path from "path";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", async (req: Request, res: Response) => {
  const cardList = await getFlashCards();
  res.send(renderToHtml(createElement(FlashCardList, { cardList })));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
