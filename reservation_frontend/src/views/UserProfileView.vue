<template>
  <div>
    <h1 class="ms-3">Welcome, {{ this.currentUserInfo.firstName }} {{ this.currentUserInfo.lastName }}</h1>
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
            <p c>Language: {{ this.currentUserInfo.userLanguage }}</p>
          </div>
        </div>
        <div class="row d-flex">
          <p>Username (ID number): {{ this.currentUserInfo.userID }}</p>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>firstName: {{ this.currentUserInfo.firstName }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>lastName: {{ this.currentUserInfo.lastName }}</p>
          </div>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>cellphone: {{ this.currentUserInfo.cellNumber }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>gender: {{ this.currentUserInfo.gender }}</p>
          </div>
        </div>
        <div class="row testBorder">
          <div class="col-6 mt-1">
            <p c>age: {{ this.currentUserInfo.userAge }}</p>
          </div>
          <div class="col-6 mt-2 d-flex justify-content-start">
            <p c>userRole: {{ this.currentUserInfo.userRole }}</p>
          </div>
        </div>
        <div class="centerBtn">
          <button>Edit details</button>
        </div>
      </div>
    </div>
    <br /><br />
    <h3 class="ms-3 mainBrwnTxt">Below are the current users and their details</h3>
    <div class="table-resonsive">
      <table class="ms-3 table">
        <tr>
          <th>userID</th>
          <th>Full name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Language</th>
          <th>Action</th>
        </tr>
        <tr v-for="user in this.$store.state.allTheUsers" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.userLanguage }}</td>
          <td>
            <button class="mainBrwnBg">Edit</button>
            <button class="buttonStyle">Delete</button>
          </td>
        </tr>
      </table>
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
      currentUserInfo: [],
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
    async deleteTheUser(userID){
      try{
        this.$store.dispatch('deleteAUser', userID)
      } catch(error){
        console.log(`The following error occured in the delete user method of the userProfile pg: ${error}`)
      }
    }
  },
  mounted() {
    try {
      this.$store.dispatch("getBookings");
    } catch (error) {
      console.log(
        `The following error was found while trying to dispatch the getBookings action`
      );
    }
    try {
      console.log("Below is the fx to get the fullUserDeets from the localStorage")
      this.currentUserInfo = JSON.parse(localStorage.getItem('fullUserDeets'))
    } catch(error){
      console.log(`The following error occured while trying to load fullCurrentUserDeets from local storage on the mounted of the userProfile pg: ${error}`)
    }
    try {
      this.$store.dispatch('getTheUsers')
    } catch (error){
      console.log(`The following error occured when trying to get all users fr state on the mounted of the userProfile pg: ${error}`)
    }
  },
};
</script>

<style>
.centerBtn {
  margin-inline: 40%;
  width: 100px;
}

.buttonStyle {
  background-color: #C36406;
  color: #343A40 ;
  border-radius: 20px;
  border-color: #C36406;
  border: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

</style>
