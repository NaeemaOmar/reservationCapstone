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
            <input type="number" placeholder="Enter your ID number..." v-model="newUserInfo.userID"/>
            <h5 class="d-flex justify-content-start mx-2 mt-3">firstName</h5>
            <input type="name" placeholder="Enter cellphone number..." v-model="newUserInfo.firstName"/>
            <h5 class="d-flex justify-content-start mx-2 mt-3">lastName</h5>
            <input type="name" placeholder="Enter cellphone number..." v-model="newUserInfo.lastName"/>
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input type="password" placeholder="Enter password here..." v-model="newUserInfo.txtPassword"/>
            <br /><br />
            <button class="my-3" @click="registerNewUser()">Register</button>
          </div>
        </div>
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
            <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              To login, enter your username (ID number) and password.
              <br>
              <span class="mainBrwnTxt"
                >Register</span
              > if you do not have an account.
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
            <input type="number" class="d-flex justify-content-start mx-2" placeholder="Enter your ID number..." v-model="checkUserInfo.userID"/>
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input type="password" class="d-flex justify-content-start mx-2" placeholder="Enter password here..." v-model="checkUserInfo.txtPassword" />
            <h5 class="d-flex justify-content-start mx-2 mt-3">OTP</h5>
            <input class="d-flex justify-content-start mx-2" type="number" placeholder="Enter cellphone number..." />
            <br>
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
  data (){
    return{
      newUserInfo:{
        userID:null,
        firstName:null,
        lastName:null,
        txtPassword: null
      },
      checkUserInfo:{
        userID:null,
        txtPassword: null
      },
      loginStatus: null
  }},
  methods:{
    async registerNewUser(){
      try{
        console.log("the register user method in the login page is running")
        await this.$store.dispatch('registerUser', this.newUserInfo)
      } catch(error){
        console.log(`the following error was found while trying to register a new user in the login pg: ${error}`)
      }
    },
    async checkUser(){
      try{
        console.log("the checkUser method in the login page is running")
        await this.$store.dispatch('checkAUser', this.checkUserInfo)
        this.loginStatus = this.$store.state.loginStatus 
      }catch(error){
        console.log(`the following error was found while trying to check user credentials in the login pg: ${error}`)
      }
    }
  },
  mounted () {
    try{
      this.$store.dispatch('getTheUsers')
    }catch(error){
      console.log(`the following error was found while trying to mount the user in the login pg: ${error}`)
    }
  }
}
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

tr{
  border: dotted;
  border-color: blue;
}

</style>
