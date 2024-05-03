// src/index.js
import express, { Request, Response } from "express";
import { createElement, renderToHtml } from "jsxte";
import dotenv from "dotenv";
import path from "path";
import { Home } from "./pages/home/Home";
import { getFlashCards } from "./controllers/flash-card-list";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", async (req: Request, res: Response) => {
  res.send(renderToHtml(createElement(Home)));
});
app.get("/manage", getFlashCards);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
