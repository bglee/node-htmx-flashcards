import { createElement, renderToHtml } from "jsxte";
import { FlashCardList } from "../pages/flashcard-list/FlashCardList";
import { Request, Response } from "express";
import * as Repo from "../data/flash-card-repo";
import { FlashCardListItem } from "../pages/flashcard-list/FlashCardListItem";
import { FlashCardForm } from "../pages/flashcard-list/FlashCardForm";
import uuid from "uuid-with-v6";
/*
 * All of the get functions have to handle full page loads like when directly visiting a URL like visiting /flash-cards/1/edit.
 * They also have to handle partial page loads like when a user clicks a button to delete a flash card. HTMX will allow us to do
 * partial page updates so there is no need to send the full page.
 *
 * There is an alternate method that would always have us sending the entire page and using hx-select to pick what part we are using.
 */

const renderFlashCardListPage = async ({
  createCard,
  editCardId,
  deleteCardId,
}: {
  createCard?: boolean;
  editCardId?: string;
  deleteCardId?: string;
}) => {
  const cardList = await Repo.listFlashCards();
  return renderToHtml(
    createElement(FlashCardList, {
      cardList,
      createCard,
      editCardId,
      deleteCardId,
    }),
  );
};

// GET /flash-cards
export const getFlashCards = async (req: Request, res: Response) => {
  res.send(await renderFlashCardListPage({}));
};

// GET /flash-cards/create
export const getCreateFlashCard = async (req: Request, res: Response) => {
  if (req.headers["hx-request"]) {
    res.send(renderToHtml(createElement(FlashCardForm, {})));
  } else {
    res.send(await renderFlashCardListPage({ createCard: true }));
  }
};

// GET /flash-cards/:id/edit
export const getEditFlashCard = async (req: Request, res: Response) => {
  if (req.headers["HX-Request"]) {
    const flashCard = await Repo.getFlashCard(req.params.id);
    res.send(
      renderToHtml(createElement(FlashCardListItem, { flashCard, edit: true })),
    );
  } else {
    res.send(renderFlashCardListPage({ editCardId: req.params.id }));
  }
};

/*
 * Non GET methods will not require the same treatment as above since direct navigation to these URLs does not need to be supported.
 */

// DELETE /flash-cards/:id
export const deleteFlashCard = async (req: Request, res: Response) => {
  await Repo.deleteFlashCard(req.params.id);
  // No HTML to send back. Just give em the ol' 204. HTMX can just remove the element.
  res.send(200);
};

export const createOrUpdateFlashCard = async (req: Request, res: Response) => {
  const card_id = req.params?.id || uuid.v6();
  const flashCard = await Repo.createFlashCard({
    ...req.body,
    card_id,
  });

  res.send(renderToHtml(createElement(FlashCardListItem, { flashCard })));
};
