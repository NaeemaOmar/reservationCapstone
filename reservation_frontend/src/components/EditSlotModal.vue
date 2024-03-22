<template>
  <div>
    <!-- editSlot modal starts here -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdropLabel' + oneSlot.slotID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'staticBackdropLabel' + oneSlot.slotID"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel' + oneSlot.slotID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              :id="'staticBackdropLabel' + oneSlot.slotID"
            >
              This edit is for the following slot: slotID =
              {{ oneSlot.slotID }}, slotDay = {{ oneSlot.slotDay }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>{{ (this.newDeets.slotID = oneSlot.slotID) }}</p>
            <h5>
              You can edit the following details: {{ this.newDeets.slotID }}
            </h5>
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>slotDay</p>
                <input
                  type="number"
                  placeholder="Enter the new day number"
                  v-model="newDeets.slotDay"
                />
              </div>
              <div class="col-12 col-sm-6">
                <p>slotMonth</p>
                <input
                  type="number"
                  placeholder="Enter the new month number"
                  v-model="newDeets.slotMonth"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="" @click="editTheSlot()">
              Edit slot
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- editSlot modal ends here -->
  </div>
</template>

<script>
export default {
  name: "EditSlot",
    props: {
      oneSlot: Object
  },
  data() {
    return {
      newDeets: {
        slotID: null,
        slotDay: null,
        slotMonth: null,
      },
    };
  },
  methods: {
    async editTheSlot() {
      try {
        console.log(
          "The editSlot fx of the admin pg is running in the editSlotModal component now"
        );
        console.log("Below is the value of the newDeetsID variable:")
        let slotID = this.newDeets.slotID
        let slotDay = this.newDeets.slotDay
        let slotMonth = this.newDeets.slotMonth
        let newDeets = {slotID, slotDay, slotMonth}
        console.log("Below is the newDeets variable that is sent from the slotsModal to the store:");
        console.log(newDeets);
        let theEditedSlot = await this.$store.dispatch(
          "editASlot",
          newDeets
        );
        console.log(
          "This is the admin pg. Below is the returned variable of the axios.patch for the slots"
        );
        console.log(theEditedSlot);
        location.reload()
      } catch (error) {
        console.log(
          `The following error occured while trying to run the editSlot fx in the admin pg via the editSlotModal component: ${error}`
        );
      }
    },
  },
};
</script>
