import { FlashCard } from "../../data/types/FlashCard";
import { FlashCardDeleteButton } from "./FlashCardDeleteButton";

type FlashCardListItemProps = {
  flashCard: FlashCard;
  edit?: boolean;
};

export const FlashCardListItem: JSXTE.Component<FlashCardListItemProps> = ({
  flashCard,
  edit = false,
}) => {
  return (
    <li id={`item-${flashCard.card_id}`}>
      <div
        class="card bg-neutral  m-2 grid grid-cols-6"
        id={`view-${flashCard.card_id}`}
      >
        <div class="col-span-5 p-2">
          <h2>{flashCard.question}</h2>
        </div>
        <FlashCardDeleteButton card_id={flashCard.card_id} />
      </div>
    </li>
  );
};
