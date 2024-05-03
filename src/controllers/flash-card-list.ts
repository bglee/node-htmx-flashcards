import { createElement, renderToHtml } from "jsxte";
import { FlashCardList } from "../pages/flashcard-list/FlashCardList";
import { Request, Response } from "express";
import { listFlashCards } from "../data/flash-card-repo";

export const getFlashCards = async (req: Request, res: Response) => {
  const cardList = await listFlashCards();
  res.send(renderToHtml(createElement(FlashCardList, { cardList })));
};
