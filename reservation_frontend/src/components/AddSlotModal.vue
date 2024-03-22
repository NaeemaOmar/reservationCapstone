<template>
  <div>
    <!-- ADD NEW SLOT MODAL starts here -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdrop' + randNum"
    >
      Add a new slot
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'staticBackdropLabel' + randNum"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel' + randNum"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="'staticBackdropLabel' + randNum">
              Please enter the following details for the new slot you would like
              to create:
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ADD NEW SLOT MODAL ends here -->
  </div>
</template>

<script>
export default {
  name: "AddSlot",
  props: {
    randNum: Number,
  },
};
</script>
