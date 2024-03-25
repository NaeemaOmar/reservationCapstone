<template>
  <div>
    <!-- MODAL STARTS HERE -->
    <!-- Button trigger modal -->
    <button
      @click="findDayName()"
      type="button"
      class="singleSlot"
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdrop' + theSlot.slotDay"
    >
      {{ theSlot.slotDay }}
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'staticBackdrop' + theSlot.slotDay"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel' + theSlot.slotDay"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content veryWhitenedBrownBg">
          <div class="modal-header">
            <h5
              class="modal-title"
              :id="'staticBackdropLabel' + theSlot.slotDay"
            >
              You have chosen to come in on: {{ this.dayName }},
              {{ theSlot.slotDay }} {{ this.monthName }} 2024
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
                    <p class="mt-3">ID number</p>
                    <input type="text" v-model="newBooking.userID" />
                  </div>
                  <div class="col-6">
                    <p class="mt-3">Language</p>
                    <!-- <input type="text" v-model="newBooking.userLanguage"> -->
                    <select id="options" name="options" v-model="newBooking.userLanguage">
                      <option value="" disabled selected>
                        Select your language:
                      </option>
                      <option value="Eng">English</option>
                      <option value="Afr">
                        Afrikaans
                      </option>
                      <option value="Xho">isiXhosa</option>
                    </select>
                  </div>
                </div>
                <p class="mt-3">Choose the time</p>
                <!-- <input type="text" v-model="newBooking.userTime"> -->
                <input
                  type="time"
                  min="08:00"
                  max="16:00"
                  step="900"
                  v-model="newBooking.userTime"
                />
                <p class="mt-3">Choose the Service</p>
                <!-- <input type="text" v-model="newBooking.userService" /> -->
                <select id="options" name="options" v-model="newBooking.userService" >
                  <option value="" disabled selected>
                    Select the service you need:
                  </option>
                  <option value="ID">ID</option>
                  <option value="BirthCertificate">Birth Certificate</option>
                  <option value="VISA">VISA</option>
                  <option value="Passport">Passport</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <!-- <button @click="findDayName"> getFullDay</button> -->
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn" @click="addABooking">
              Create booking
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
  name: "BookingsModal",
  props: {
    theSlot: Object,
  },
  data() {
    return {
      dayName: "",
      monthName: "",
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      newBooking: {
        userID: null,
        userLanguage: null,
        userTime: null,
        userService: null,
      },
    };
  },
  methods: {
    async findDayName() {
      let fullDate = new Date(
        `2024, '${this.theSlot.slotMonth}, ${this.theSlot.slotDay}'`
      );
      console.log("below is the full date");
      console.log(fullDate);
      let dayNum = fullDate.getDay();
      console.log("below is the day");
      console.log(this.weekDays[dayNum]);
      this.dayName = this.weekDays[dayNum];
      console.log("below is the this.dayName variable");
      console.log(this.dayName);
      let monthNum = fullDate.getMonth();
      console.log("Below is the monthNum");
      console.log(monthNum);
      let monthName = this.monthNames[monthNum];
      console.log("Below is the monthName");
      console.log(monthName);
      this.monthName = monthName;
    },
    async addABooking() {
      let newBooking = this.newBooking;
      // the line of code above allows me to use the newBooking variable w/out the need for the this. keyword
      try {
        await this.$store.dispatch("addBooking", newBooking);
        alert(
          `You have successfully created the following booking: userID = ${newBooking.userID}, userLanguage = ${newBooking.userLanguage}, userTime = ${newBooking.userTime}, userService: ${newBooking.userService}. Please proceed to the user profile in order to check, edit or delete your booking.`
        );
        location.reload();
      } catch (error) {
        console.log(
          `the following error was found in the bookings modal when trying to add a new booking: ${error}`
        );
        // location.reload();
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
  /* margin-left: 53px; */
  margin-top: 20px;
}
</style>
