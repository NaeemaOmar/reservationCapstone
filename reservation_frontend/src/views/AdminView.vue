<template>
  <div>
    <h1 class="ms-3">Welcome, {{ this.currentUserInfo.firstName }} {{ this.currentUserInfo.lastName }}</h1>
    <div class="row">
        <div class="col-3 ms-4 profileIconDiv darkGreyBg d-flex justify-content-center">
            <img class="profileIcon" src="https://i.ibb.co/zF1SSmP/userprofile-removebg.png" alt="">
        </div>
        <div class="col-9 mx-2 slightlyWhitenedBrownBg">
            <h2>Adminstrator details</h2>
            <div class="row">
                <p>Name: {{ this.currentUserInfo.firstName }} {{ this.currentUserInfo.lastName  }} </p>
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
            <button centerBtn>Edit details</button>
        </div>
    </div>
    <h3 class="ms-3 mainBrwnTxt">Below are the users</h3>
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
                    <td>{{user.userID}}</td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.userAge}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.userRole}}</td>
                    <td>
                        <button>edit</button>
                        <button @click="deleteTheUser(user.userID)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3 class="ms-3 mainBrwnTxt">Below are the booking(s) per user</h3>
    <h3 class="ms-3 mainBrwnTxt">Below are the slots available for booking. NOTE: this table does not exist yet</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentUserInfo:[]
    };
  },
  methods:{
    async deleteTheUser(userID){
      try{
        this.$store.dispatch('deleteAUser', userID)
        location.reload()
        location.reload()
      } catch(error){
        console.log(`The following error occured in the delete user method of the Admin pg: ${error}`)
      }
    }
  },
  mounted (){
    try {
        this.$store.dispatch('getTheUsers')
    } 
    catch(error)
    {
        console.log(`In the adminPg, the following error was found while trying to call usersArray: ${error}`)
    }
    try {
      console.log("Below is the fx to get the fullUserDeets from the localStorage")
      this.currentUserInfo = JSON.parse(localStorage.getItem('fullUserDeets'))
    } catch(error){
      console.log(`The following error occured while trying to load fullCurrentUserDeets from local storage on the mounted of the userProfile pg: ${error}`)
    }
  }
};
</script>

<style>
.centerBtn {
  margin-inline: 40%;
  width: 100px;
}
</style>