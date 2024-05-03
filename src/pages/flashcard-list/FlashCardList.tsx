import { Page } from "../../components/global/Page";
import { FlashCard } from "../../data/types/FlashCard";
import { FlashCardListItem } from "./FlashcardListItem";

type FlashCardListProps = {
  cardList: Array<FlashCard>;
  editCardId?: string;
  deleteCardId?: string;
};

export const FlashCardList: JSXTE.Component<FlashCardListProps> = ({
  cardList,
}) => {
  return (
    <Page>
      <div class="flex justify-center">
        <ul class="basis-3/4">
          {cardList.map((card) => (
            <FlashCardListItem card={card} />
          ))}
        </ul>
      </div>
    </Page>
  );
};
