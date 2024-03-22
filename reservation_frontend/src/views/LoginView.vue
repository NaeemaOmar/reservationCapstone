<template>
  <div>
    <h1>Welcome to eHomeAffairs - eBooking</h1>
    <h3 class="mainBrwnTxt">Easy to use, convenient and just a click away</h3>
    <h4>login status = {{ loginStatus }}</h4>
    <div class="slightlyWhitenedBrownBg mx-3">
      <div class="row d-flex justify-content-evenly">
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              To register,
              <span class="mainBrwnTxt"
                >use your ID number as the username.</span
              >
              <br />
              A <span class="mainBrwnTxt">one-time-pin (OTP)</span> will be sent
              to your cellphone so please ensure you have your cellphone near
              you.
              <br />
              Please note: the
              <span class="mainBrwnTxt">number you use to register</span> is
              where any sms <span class="mainBrwnTxt">notifications</span> from
              the department will be sent to.
            </h5>
            <br />
            <h5 class="d-flex justify-content-start mx-2">
              Username (ID number)
            </h5>
            <input
              type="number"
              placeholder="Enter your ID number..."
              v-model="newUserInfo.userID"
            />
            <h5 class="d-flex justify-content-start mx-2 mt-3">firstName</h5>
            <input
              type="name"
              placeholder="Enter cellphone number..."
              v-model="newUserInfo.firstName"
            />
            <h5 class="d-flex justify-content-start mx-2 mt-3">lastName</h5>
            <input
              type="name"
              placeholder="Enter cellphone number..."
              v-model="newUserInfo.lastName"
            />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input
              type="password"
              placeholder="Enter password here..."
              v-model="newUserInfo.txtPassword"
            />
            <br /><br />
            <button class="my-3" @click="registerNewUser()">Register</button>
          </div>
        </div>
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg d-flex">
          <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              To login, enter your username (ID number) and password.
              <br />
              <span class="mainBrwnTxt">Register</span> if you do not have an
              account.
              <br />
              A <span class="mainBrwnTxt">one-time-pin (OTP)</span> will be sent
              to your cellphone so please ensure you have your cellphone near
              you.
              <br />
              Please note: you will receive the OTP via the
              <span class="mainBrwnTxt">number you used to register</span>
            </h5>
            <br />
            <h5 class="d-flex justify-content-start mx-2">
              Username (ID number)
            </h5>
            <input
              type="number"
              class="d-flex justify-content-start mx-2"
              placeholder="Enter your ID number..."
              v-model="checkUserInfo.userID"
            />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input
              type="password"
              class="d-flex justify-content-start mx-2"
              placeholder="Enter password here..."
              v-model="checkUserInfo.txtPassword"
            />
            <h5 class="d-flex justify-content-start mx-2 mt-3">OTP</h5>
            <input
              class="d-flex justify-content-start mx-2"
              type="number"
              placeholder="Enter cellphone number..."
            />
            <br />
            <button class="my-3" @click="checkUser()">Login</button>
          </div>
        </div>
      </div>
    </div>
    <h2>View token assignment for users here</h2>
    <table>
      <thead>
        <tr>
          <td>userID</td>
          <td>token</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in this.$store.state.allTheUsers" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.token }}</td>
        </tr>
      </tbody>
    </table>
    <h2>View basic info for existing users here</h2>
    <table>
      <thead>
        <tr>
          <td>userID</td>
          <td>firstName</td>
          <td>lastName</td>
          <td>txtPassword</td>
          <td>hashedPassword</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in this.$store.state.allTheUsers" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.txtPassword }}</td>
          <td>{{ user.hashedPassword }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUserInfo: {
        userID: null,
        firstName: null,
        lastName: null,
        txtPassword: null,
      },
      checkUserInfo: {
        userID: null,
        txtPassword: null,
      },
      loginStatus: null,
    };
  },
  methods: {
    async registerNewUser() {
      try {
        console.log("the register user method in the login page is running");
        await this.$store.dispatch("registerUser", this.newUserInfo);
      } catch (error) {
        console.log(
          `the following error was found while trying to register a new user in the login pg: ${error}`
        );
      }
    },
    async setFullCurrentUserDeets(currentUserInfoID) {
      console.log(
        "The setFullCurrentUserDeets fx just started and immediately ran the getAUser fx of the store"
      );
      let [fullUserDeets] = await this.$store.dispatch(
        "getAUser",
        currentUserInfoID
      );
      console.log(
        "We are now back in the setFullCurrentUserDeets fx of the login pg"
      );
      console.log(
        "Below is the variable/array returned after running the store fx"
      );
      console.log(fullUserDeets);
      console.log("the fullUserDeets will now be set to localStorage");
      localStorage.setItem("fullUserDeets", JSON.stringify(fullUserDeets));
    },
    async setCurrentUserInfo() {
      try {
        // Since getAUser in the userProfile didn't work imma try to get this to work in the login pg
        console.log("The setCurrentUser to local storage fx is running now");
        localStorage.setItem(
          "currentUserInfo",
          JSON.stringify(this.checkUserInfo)
        );
        console.log(
          "The setFullCurrentUserDeets fx just started and immediately ran the getAUser fx of the store"
        );
        let [fullUserDeets] = await this.$store.dispatch(
          "getAUser",
          this.checkUserInfo.userID
        );
        console.log(
          "Below is the variable/array returned after running the getAUser store fx"
        );
        console.log(fullUserDeets);
        console.log("the fullUserDeets will now be set to localStorage");
        localStorage.setItem("fullUserDeets", JSON.stringify(fullUserDeets));
      } catch (error) {
        console.log(
          `The followinng error occured while trying to set the checkUser info (id number + txtPassword) as well as the fullUserDeets to the local storage: ${error}`
        );
      }
    },
    async checkUser() {
      try {
        console.log("the checkUser method in the login page is running");
        let checkTheuser = await this.$store.dispatch(
          "checkAUser",
          this.checkUserInfo
        );
        console.log(
          "We're back in the checkUser fx of the loginPg. Below is the value of the checkTheUser.token variable (hopefully)"
        );
        console.log(checkTheuser.token);
        console.log("Below is the checkTheuser.worked variable");
        console.log(checkTheuser.worked);
        console.log(
          "below i'm setting the checkTheuser.token variable to local storage. hopefully it works"
        );
        localStorage.setItem("userToken", JSON.stringify(checkTheuser.token));
        console.log(
          "Below I'm setting the checkTheuser.worked variable to local storage. Pray for me"
        );
        localStorage.setItem(
          "checkUserStatus",
          JSON.stringify(checkTheuser.worked)
        );
        await this.setCurrentUserInfo();
        window.location.href = "/";
        // history.go(-1)
      } catch (error) {
        console.log(
          `the following error was found while trying to check user credentials in the login pg: ${error}`
        );
      }
    },
  },
  mounted() {
    try {
      this.$store.dispatch("getTheUsers");
    } catch (error) {
      console.log(
        `the following error was found while trying to mount the user in the login pg: ${error}`
      );
    }
    try {
      this.loginStatus = JSON.parse(localStorage.getItem("checkUserStatus"));
    } catch (error) {
      console.log(
        `The following error was found when getting the loginStatus at the mounted of the loginPg: ${error} `
      );
    }
  },
};
</script>

<style>
h1,
h3 {
  text-align: start;
  margin-left: 5px;
}

.innerDiv {
  margin-block: 12px;
}

tr {
  border: dotted;
  border-color: blue;
}
</style>
