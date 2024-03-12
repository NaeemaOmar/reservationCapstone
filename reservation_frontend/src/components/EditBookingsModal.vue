<template>
  <div>
    <!-- MODAL STARTS HERE -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdrop' + booking.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'staticBackdrop' + booking.userID"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel' + booking.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content veryWhitenedBrownBg">
          <div class="modal-header">
            <h5
              class="modal-title"
              :id="'staticBackdropLabel' + booking.userID"
            >
              You have chosen to edit the following booking with the following userID and details:
              userID = {{ booking.userID }}, userLanguage = {{ booking.userLanguage }}, userTime = {{ booking.userTime }}, userService = {{ booking.userService }}
            </h5>
            <button
              type="button"
              class="btn-close mt-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mainBrownBg_modal">
              <div class="mainBrwnBg topHeight"></div>
              <div class="veryWhitenedBrownBg_modal">
                <div class="row">
                  <div class="col-6">
                    <p class="mt-3">new Language</p>
                    <input type="text" v-model="editBooking.userLanguage" />
                  </div>
                  <div class="col-6">
                    <p class="mt-3">Choose a new time</p>
                    <input type="text" v-model="editBooking.userTime" />
                  </div>
                </div>
                <p class="mt-3">ID number</p>
                <input type="text" v-model="editBooking.userID">
                <p class="mt-3">Choose a new Service</p>
                <input type="text" v-model="editBooking.userService" />
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
            <button type="button" class="btn" @click="editABooking">
              edit booking
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL ENDS HERE -->
  </div>
</template>

<script>
export default {
  name: "EditBookingsModal",
  props: {
    booking: Object,
  },
  data() {
    return {
      editBooking: {
        userID: null,
        userLanguage: null,
        userTime: null,
        userService: null,
      },
    };
  },
  methods: {
    editABooking() {
      try {
        console.log(`in the editBooking modal, this is the userID that is being edited: ${this.editBooking.userID}`)
        this.$store.dispatch("editABooking", this.editBooking);
        console.log("you have successfully edited the booking")
        // console.log(
        //   `You have successfully edited the following booking: userID = ${this.editBooking.userID}, userLanguage = ${this.editBooking.userLanguage}, userTime = ${this.editBooking.userTime}, userService: ${this.editBooking.userService}`
        // );
        location.reload();
      } catch (error) {
        console.log(
          `the following error was found in the edit bookings modal when trying to edit a new booking: ${error}`
        );
        //   location.reload();
      }
    },
  },
};
</script>

<style>
.mainBrownBg_modal {
  background: #c36406;
  height: 300px;
  width: 460px;
}

.mainBrownBorder {
  border-color: #c36406;
}

.topHeight {
  height: 4px;
}

.veryWhitenedBrownBg_modal {
  background-color: #f0d8c1;
  height: 292px;
  width: 452px;
  margin-left: 4px;
  /* margin-top: 10px; */
}

.singleSlot {
  height: 50px;
  width: 50px;
  border-radius: 15px;
  border-color: #f0d8c1;
  background-color: #f2ebd9;
  margin-left: 53px;
  margin-top: 20px;
}
</style>
