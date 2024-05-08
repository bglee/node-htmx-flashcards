import { Page } from "../../components/global/Page";
import { FlashCard } from "../../data/types/FlashCard";
import { FlashCardForm } from "./FlashCardForm";
import { FlashCardListItem } from "./FlashCardListItem";

type FlashCardListProps = {
  cardList: Array<FlashCard>;
  createCard?: boolean;
  editCardId?: string;
  deleteCardId?: string;
};

export const FlashCardList: JSXTE.Component<FlashCardListProps> = ({
  cardList,
  createCard,
  editCardId,
}) => {
  return (
    <Page>
      <div class="flex justify-center py-5">
        <div class="basis-1/2">
          <form method="post">
            <input
              class="w-full input input-bordered"
              type="text"
              name="search"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="basis-3/4 py-5">
          {createCard ? (
            <FlashCardForm />
          ) : (
            <button
              id="create-card-button"
              class="btn btn-primary w-full"
              hx-get="/manage/flash-cards/create"
              hx-replace-url="true"
              hx-swap="outerHTML"
            >
              Create New Flashcard
            </button>
          )}
        </div>
      </div>
      <div class="flex justify-center">
        {cardList.length === 0 ? (
          <div class="basis-3/4">
            <div class="card">
              <h2 class="text-center">No flashcards found</h2>
            </div>
          </div>
        ) : (
          <ul class="basis-3/4" id="card-list">
            {cardList.map((card) => (
              <FlashCardListItem
                flashCard={card}
                edit={card.card_id === editCardId}
              />
            ))}
          </ul>
        )}
      </div>
    </Page>
  );
};
