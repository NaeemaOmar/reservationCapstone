<template>
    <div>
      <div class="d-flex justify-content-center">
        <img class="dhaBanner" src="https://i.ibb.co/0QbW3FS/DHA-banner.png">
      </div>
<div class="d-flex justify-content-evenly">
  <nav class="navbar navbar-expand-lg navBg">
    <!-- <div class="container-fluid"> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/userprofile">User Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin">Admin</a>
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
    name: 'Navbar',
    methods: {
      async logOut(){
        try{
          console.log("The logout fx is running via the navbar")
          let logOut = false;
          let checkTheuser = JSON.parse(localStorage.getItem('checkTheuser'))
          checkTheuser = logOut
          console.log("Below is the checkTheuser variable after it's been set to false (hopefully)")
          console.log(checkTheuser)
          localStorage.setItem('checkTheuser', JSON.stringify(checkTheuser))
          location.reload()
        } catch (error){
          console.log(`The following error occured while trying to use the log-out btn in the navBar: ${error}`)
        }
      }
    }
}

</script>

<style scoped>
.navBg {
    background-color: aqua;
}

.dhaBanner{
    width: 75%;
    margin-inline:100px;
}

</style>