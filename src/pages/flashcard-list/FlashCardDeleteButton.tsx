type FlashCardDeleteButtonProps = {
  card_id: string;
};

export const FlashCardDeleteButton = ({ card_id }: { card_id: string }) => {
  return (
    <div x-data="{ deleteOpen: false }">
      <dialog id="delete-modal" class="modal" x-bind:open="deleteOpen">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure?</h3>
          <p class="py-4">Are you sure you want to delete this flash card?</p>
          <div class="modal-action">
            <button class="btn" x-on:click="deleteOpen=false">
              Cancel
            </button>
            <button
              x-on:click={`
                  deleteOpen=false;
                  htmx.trigger("#edit-${card_id}", 'confirmed');  
                `}
            >
              Confirm
            </button>
          </div>
        </div>
      </dialog>
      <button
        class="btn btn-ghost"
        id={`edit-${card_id}`}
        hx-trigger="confirmed"
        hx-target={`#item-${card_id}`}
        hx-swap="delete"
        hx-delete={`/manage/flash-cards/${card_id}`}
        hx-indicator="#loading"
        x-on:click="deleteOpen=true"
      >
        Delete
      </button>
    </div>
  );
};
