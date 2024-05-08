// src/index.js
import express, { Request, Response } from "express";
import { createElement, renderToHtml } from "jsxte";
import dotenv from "dotenv";
import path from "path";
import { Home } from "./pages/home/Home";
import {
  createOrUpdateFlashCard,
  deleteFlashCard,
  getCreateFlashCard,
  getEditFlashCard,
  getFlashCards,
} from "./controllers/manange-flashcards";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", async (req: Request, res: Response) => {
  res.send(renderToHtml(createElement(Home)));
});
app.get("/manage/flash-cards", getFlashCards);

app.get("/manage/flash-cards/create", getCreateFlashCard);

app.get("/manage/flash-cards/:id/edit", getEditFlashCard);

app.post("/manage/flash-cards", createOrUpdateFlashCard);
app.post("/manage/flash-cards/:id", createOrUpdateFlashCard);

app.delete("/manage/flash-cards/:id", deleteFlashCard);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
