import { FlashCard } from "../../data/types/FlashCard";

type FlashCardListItemProps = {
  card: FlashCard;
};

export const FlashCardListItem: JSXTE.Component<FlashCardListItemProps> = ({
  card,
}) => {
  return (
    <li>
      <div class="card bg-primary m-2 grid grid-cols-6">
        <div class="col-span-5 p-2">
          <h2>{card.question}</h2>
        </div>
      </div>
    </li>
  );
};
