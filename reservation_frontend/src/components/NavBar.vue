<template>
  <div>
    <div class="d-flex justify-content-center">
      <img class="dhaBanner" src="https://i.ibb.co/0QbW3FS/DHA-banner.png" />
    </div>
    <div class="d-flex justify-content-evenly">
      <nav class="navbar navbar-expand-lg navBg">
        <!-- <div class="container-fluid"> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bookings">Bookings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" v-if="!loginStatus">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/userprofile" v-if="!adminUser && loginStatus"
                >User Profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin" v-if="adminUser">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <button @click="logOut()">Log out</button>
              </a>
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </nav>
    </div>
  </div>
</template>

<script>
// Saving DHA banner img here: https://i.ibb.co/0QbW3FS/DHA-banner.png

export default {
  name: "Navbar",
  data() {
    return {
      loginStatus: null,
      userRole: null,
      adminUser:null,
      clientUser: null
    };
  },
  methods: {
    async logOut() {
      try {
        console.log("The logout fx is running via the navbar");
        console.log(
          "Part 1 of the logout fx (setting user status to false) is running now"
        );
        let logOut = false;
        let checkTheuser = JSON.parse(localStorage.getItem("checkTheuser"));
        checkTheuser = logOut;
        console.log(
          "Below is the checkTheuser variable after it's been set to false (hopefully)"
        );
        console.log(checkTheuser);
        localStorage.setItem("checkTheuser", JSON.stringify(checkTheuser));
        console.log(
          "Part 2 of the logout fx (clearing/resetting the local storage) is running now"
        );
        localStorage.clear();
        history.go(-1);
        location.reload();
      } catch (error) {
        console.log(
          `The following error occured while trying to use the log-out btn in the navBar: ${error}`
        );
      }
    },
  },
  mounted() {
    try {
      console.log("The getUserRole fx is running on the mounted of the navBar")
      let fullUserDeets = JSON.parse(localStorage.getItem("fullUserDeets"));
      console.log("Below is the fullUserDeets.userRole variable")
      console.log(fullUserDeets.userRole)
      if ( fullUserDeets.userRole == 'admin'){
        console.log("The userRole is admin. Below is the this.adminUser variable after being assigned")
        this.adminUser = fullUserDeets.userRole
        console.log(this.adminUser)
      }
      this.userRole = fullUserDeets.userRole;
    } catch (error) {
      console.log(
        `The following error occured when trying to see the userRole in the mounted of the navBar: ${error}`
      );
    }
    try {
      this.loginStatus = JSON.parse(localStorage.getItem("checkUserStatus"));
    } catch (error) {
      console.log(
        `The following error was found when getting the loginStatus at the mounted of the navBar: ${error} `
      );
    }
  },
};
</script>

<style scoped>
.navBg {
  background-color: aqua;
}

.dhaBanner {
  width: 75%;
  margin-inline: 100px;
}
</style>
