<template>
  <div>
    <h1 class="ms-3">Welcome, {{ name }} {{ surName }}</h1>
    <div class="row">
        <div class="col-3 ms-4 profileIconDiv darkGreyBg d-flex justify-content-center">
            <img class="profileIcon" src="https://i.ibb.co/zF1SSmP/userprofile-removebg.png" alt="">
        </div>
        <div class="col-9 mx-2 slightlyWhitenedBrownBg">
            <h2>Adminstrator details</h2>
            <div class="row">
                <p>Name: {{ name }} {{ surName }} </p>
            </div>
            <div class="row d-flex justify-content-evenly">
                <div class="col-5">
                    <p>Language: {{ Language }}</p>
                </div>
                <div class="col-3">
                    <p>Age: {{ Age }}</p>
                </div>
                <div class="col-4">
                    <p>Gender:{{ Gender }}</p>
                </div>
            </div>
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
                    <td>emailAdd</td>
                    <td>cellNumber</td>
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
                    <td>{{user.emailAdd}}</td>
                    <td>{{user.cellNumber}}</td>
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
      name: "Naeema",
      surName: "Omar",
      Language: "Afrikaans",
      Age: 25,
      Gender:"female"
    };
  },
  mounted (){
    try {
        this.$store.dispatch('getTheUsers')
    } catch(error){console.log(`In the adminPg, the following error was found while trying to call usersArray: ${error}`)}
  }
};
</script>
