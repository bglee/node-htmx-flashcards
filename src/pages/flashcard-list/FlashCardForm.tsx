import { FlashCard } from "../../data/types/FlashCard";
import { FlashCardDeleteButton } from "./FlashCardDeleteButton";

type FlashCardFormProps = {
  flashCard?: FlashCard;
};

export const FlashCardForm: JSXTE.Component<FlashCardFormProps> = ({
  flashCard,
}) => {
  return (
    <div
      class="card bg-neutral m-2 grid grid-cols-6"
      id={flashCard ? `edit-${flashCard.card_id}` : "new-card"}
    >
      <form
        hx-post={
          flashCard
            ? `/manage/flash-cards/${flashCard.card_id}`
            : "/manage/flash-cards"
        }
        hx-swap={flashCard ? "outerHTML" : "afterbegin"}
        hx-target={flashCard ? `#edit-${flashCard.card_id}` : "#card-list"}
        hx-indicator="#loading"
      >
        <div class="col-span-5 p-2">
          <input
            class="input input-bordered w-full"
            type="text"
            name="question"
            placeholder="Question"
            value={flashCard ? flashCard.question : ""}
          />
          <input
            class="input input-bordered w-full"
            type="text"
            name="answer"
            placeholder="Answer"
            value={flashCard ? flashCard.answer : ""}
          />
        </div>
        <button
          class="btn btn-secondary m-2"
          type="button"
          hx-get="/manage/flash-cards"
          hx-select={
            flashCard ? `#view-${flashCard.card_id}` : "#create-card-button"
          }
          hx-swap="outerHTML"
          hx-target={flashCard ? `#edit-${flashCard.card_id}` : "#new-card"}
        >
          Cancel
        </button>
        <button class="btn btn-primary m-2" type="submit">
          Save
        </button>
      </form>
      {flashCard && <FlashCardDeleteButton card_id={flashCard.card_id} />}
    </div>
  );
};
