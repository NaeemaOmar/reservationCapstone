<template>
  <div class="mx-3">
    <h1 class="">
      Welcome, {{ this.currentUserInfo.firstName }}
      {{ this.currentUserInfo.lastName }}
    </h1>
    <div class="row">
      <div
        class="col-3 ms-4 profileIconDiv darkGreyBg d-flex justify-content-center"
      >
        <img
          class="profileIcon"
          src="https://i.ibb.co/zF1SSmP/userprofile-removebg.png"
          alt=""
        />
      </div>
      <div class="col-9 mx-2 slightlyWhitenedBrownBg">
        <h2>Adminstrator details</h2>
        <div class="row">
          <p>
            Name: {{ this.currentUserInfo.firstName }}
            {{ this.currentUserInfo.lastName }}
          </p>
        </div>
        <div class="row d-flex justify-content-evenly">
          <div class="col-5">
            <p>Language: {{ this.currentUserInfo.userLanguage }}</p>
          </div>
          <div class="col-3">
            <p>Age: {{ this.currentUserInfo.userAge }}</p>
          </div>
          <div class="col-4">
            <p>Gender:{{ this.currentUserInfo.gender }}</p>
          </div>
        </div>
        <EditSingleUser class="mt-3" :userID="this.currentUserInfo.userID"/>
      </div>
    </div>
    <h3 class=" mainBrwnTxt">Below are the users</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <td>userID</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>userAge</td>
            <td>gender</td>
            <td>userRole</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in this.$store.state.allTheUsers" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <EditUser :user="user" />
              <button @click="deleteTheUser(user.userID)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <!-- <h3>Add a new user using the button below</h3> -->
      <!-- ADD USER MODAL STARTS HERE -->

      <!-- Button trigger modal -->
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class=""
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add new user
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content veryWhitenedBrownBg">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Add a new user
              </h5>
              <button
                type="button"
                class="btn-close"
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
                      <p>userID</p>
                      <input
                        type="number"
                        placeholder="Enter the ID number"
                        v-model="newUserInfo.userID"
                      />
                    </div>
                    <div class="col-6">
                      <p>userRole</p>
                      <input
                        type="text"
                        placeholder="Enter the userRole"
                        v-model="newUserInfo.userRole"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6">
                      <p>firstName</p>
                      <input
                        type="text"
                        placeholder="Enter the firstName"
                        v-model="newUserInfo.firstName"
                      />
                    </div>
                    <div class="col-6">
                      <p>lastName</p>
                      <input
                        type="text"
                        placeholder="Enter the lastName"
                        v-model="newUserInfo.lastName"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6">
                      <p>userAge</p>
                      <input
                        type="number"
                        placeholder="Enter the userAge"
                        v-model="newUserInfo.userAge"
                      />
                    </div>
                    <div class="col-6">
                      <p>gender</p>
                      <input
                        type="text"
                        placeholder="Enter the gender"
                        v-model="newUserInfo.gender"
                      />
                    </div>
                  </div>
                  <div class="row mt-3 d-flex justify-content-evenly">
                    <div class="col-6">
                      <p>Password</p>
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        placeholder="Enter password here"
                        v-model="newUserInfo.txtPassword"
                      />
                    </div>
                  </div>
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
              <button type="button" class="" @click="registerNewUser()">
                add user
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- ADD USER MODAL ENDS HERE -->
    </div>
    <!-- <h3 class=" mainBrwnTxt">Below are the booking(s) per user</h3> -->
    <h3 class=" mainBrwnTxt">Below are the slots available for booking:</h3>
    <table class="mx-auto">
      <tr>
        <td>slotID</td>
        <td>slotDay</td>
        <td>slotMonth</td>
        <td>Action</td>
      </tr>
      <tr v-for="oneSlot in this.theSlotsArray" :key="oneSlot.slotID">
        <td>{{ oneSlot.slotID }}</td>
        <td>{{ oneSlot.slotDay }}</td>
        <td>{{ oneSlot.slotMonth }}</td>
        <td>
          <div class="d-flex justify-content-evenly">
            <EditSlot :oneSlot="oneSlot" />
            <!-- {{ this.aSlotID = oneSlot.slotID }} -->
            <button @click="deleteSlot(oneSlot.slotID)">delete</button>
          </div>
        </td>
      </tr>
    </table>
    <!-- <h3>Add a new slot using the button below:</h3> -->
    <AddSlot class="mt-3" :randNum="newNum"/>

  </div>
</template>

<script>
import EditUser from "@/components/EditUserModal.vue";
import EditSingleUser from "@/components/EditSingleUserModal.vue";
import EditSlot from "@/components/EditSlotModal.vue";
import AddSlot from "@/components/AddSlotModal.vue";

export default {
  components: {
    EditUser,
    EditSingleUser,
    EditSlot,
    AddSlot
  },
  data() {
    return {
      newNum:5000,
      aSlotID: null,
      newDeets: {
        slotID: null,
        slotDay: null,
        slotMonth: null,
      },
      theSlotsArray: [],
      currentUserInfo: [],
      allUsers: [],
      newUserInfo: {
        firstName: null,
        lastName: null,
        userAge: null,
        gender: null,
        userRole: null,
        txtPassword: null,
      },
    };
  },
  methods: {
    async deleteSlot(theSlotID) {
      console.log("The deleteSlot fx is running in the adminPg");
      let deletion = await this.$store.dispatch("deleteASlot", theSlotID);
      location.reload();
    },
    async getAllSlots() {
      try {
        let allTheSlots = await this.$store.dispatch("getSlots");
        console.log(
          "below is the slots array returned fr the getSlots axios in the dateFxs pg"
        );
        console.log(allTheSlots);
        this.theSlotsArray = allTheSlots;
      } catch (error) {
        console.log(
          `The following error occured on the mounted of the DateFxsBooking view when trying to get the slots: ${error}`
        );
      }
    },
    async registerNewUser() {
      try {
        console.log("the register user method in the login page is running");
        await this.$store.dispatch("registerUser", this.newUserInfo);
        location.reload()
      } catch (error) {
        console.log(
          `the following error was found while trying to register a new user in the login pg: ${error}`
        );
      }
    },
    async deleteTheUser(userID) {
      try {
        console.log("The deleteUser fx of the admin pg is now running. Below is the userID to be deleted:")
        console.log(userID)
        this.$store.dispatch("deleteAUser", userID);
        location.reload()
      } catch (error) {
        console.log(
          `The following error occured in the delete user method of the Admin pg: ${error}`
        );
      }
    },
    // async allUsers(){
    //     try{
    //         console.log("the allUsers fx in the methods of the admin pg will now run")
    //         this.allUsers = this.$store.dispatch('getTheUsers')
    //     } catch(error){
    //         console.log(`The following error occured while trying to define the allUsers fx in the methods of the admin pg: ${error}`)
    //     }
    // }
  },
  mounted() {
    try {
      this.getAllSlots();
    } catch (error) {
      console.log(
        `The following error occured in the mounted of the admin pg when trying to run the getSlots fx: ${error}`
      );
    }
    try {
      this.allUsers = this.$store.dispatch("getTheUsers");
      // this.allUsers()
    } catch (error) {
      console.log(
        `In the adminPg, the following error was found while trying to call usersArray: ${error}`
      );
    }
    try {
      console.log(
        "Below is the fx to get the fullUserDeets from the localStorage"
      );
      this.currentUserInfo = JSON.parse(localStorage.getItem("fullUserDeets"));
    } catch (error) {
      console.log(
        `The following error occured while trying to load fullCurrentUserDeets from local storage on the mounted of the userProfile pg: ${error}`
      );
    }
  },
};
</script>

<style>

.mainBrownBg_modal {
  background: #c36406;
  /* height: 300px;
    width: 460px; */
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
</style>
