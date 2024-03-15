<template>
  <div>
    <h1>fetching user info from the localStorage begins here</h1>
    <button @click="getCurrentUserDeets()">Get currentUserInfo</button>
    <h1 class="ms-3">Welcome, {{ firstName }} {{ lastName }}</h1>
    <br />
    <div class="row d-flex justify-content-center">
      <div
        class="col-3 ms-1 mx-3 darkGreyBg profileIconDiv d-flex justify-content-center"
      >
        <img
          class="profileIcon"
          src="https://i.ibb.co/zF1SSmP/userprofile-removebg.png"
          alt=""
        />
      </div>
      <div class="col-9 slightlyWhitenedBrownBg">
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <h2>User info</h2>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-end">
            <p c>Language: {{ userLanguage }}</p>
          </div>
        </div>
        <div class="row d-flex">
          <p>Username (ID number): {{ userID }}</p>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>firstName: {{ firstName }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>lastName: {{ lastName }}</p>
          </div>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>cellphone: {{ cellphone }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>gender: {{ gender }}</p>
          </div>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>age: {{ age }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>userRole: {{ userRole }}</p>
          </div>
        </div>
        <div class="centerBtn">
          <button>Edit details</button>
        </div>
      </div>
    </div>
    <br /><br />
    <h3 class="ms-3 mainBrwnTxt">Below are your booking(s)</h3>
    <div class="table-responsive">
      <table class="ms-3 table">
        <thead>
          <tr>
            <td>Day</td>
            <td class="d-flex mx-2">Date</td>
            <td>Language</td>
            <td class="d-flex mx-2">Time</td>
            <td>Service</td>
            <td class="d-flex mx-5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="booking in this.$store.state.theBookingsArray"
            :key="booking.userID"
          >
            <td>{{ booking.userID }}</td>
            <td class="d-flex mx-2">Need to get date</td>
            <td>{{ booking.userLanguage }}</td>
            <td class="d-flex mx-2">{{ booking.userTime }}</td>
            <td>{{ booking.userService }}</td>
            <td class="d-flex mx-2">
              <EditBookingsModal :booking="booking" class="mx-3" />
              <button @click="deleteBooking(booking.userID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br />
  </div>
</template>

<script>
import EditBookingsModal from "@/components/EditBookingsModal.vue";

export default {
  data() {
    return {
      firstName: "Naeema",
      lastName: "Omar",
      userLanguage: "English",
      userID: 1234,
      cellphone: 1234567891,
      gender: "female",
      age: 25,
      userRole: "client",
      currentUserInfo: null,
      currentUserID: null,
    };
  },
  components: {
    EditBookingsModal,
  },
  methods: {
    async deleteBooking(userID) {
      try {
        await this.$store.dispatch("deleteBooking", userID);
        location.reload();
        location.reload();
      } catch (error) {
        console.log(
          `The following error occured while trying to dispatch the delete booking fx: ${error}`
        );
      }
    },
    async getCurrentUserDeets() {
      try {
        console.log(
          "the fx to get the current userInf fr local storage is running in the userProfile now"
        );
        this.currentUserInfo = JSON.parse(
          localStorage.getItem("currentUserInfo")
        );
        let theUserID = this.currentUserInfo.userID;
        console.log(`This is the userID fr localStorage: ${theUserID}`);
        this.currentUserID = this.currentUserInfo.userID;
        console.log("Below is the this.currentUserId variable after being set");
        console.log(this.currentUserID);
        console.log("Now I'm starting the getAUser fx from the store");
        let fullUserDeets = await this.$store.dispatch(
          "getAUser",
          this.currentUserID
        );
        console.log("Below is the fullUserDeets variable");
        console.log(fullUserDeets);
      } catch (error) {
        console.log(
          `The following error occured while trying to get the individual user info from the local storage on the mounted of the userProfile: ${error}`
        );
      }
    },
  },
  mounted() {
    try {
      this.$store.dispatch("getBookings");
    } catch (error) {
      console.log(
        `The following error was found while trying to dispatch the getBookings action`
      );
    }
  },
};
</script>

<style>
.centerBtn {
  margin-inline: 40%;
  width: 100px;
}
</style>
