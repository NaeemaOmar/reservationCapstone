<template>
    <div>
<img class="dhaBanner" src="https://i.ibb.co/0QbW3FS/DHA-banner.png">
<nav class="navbar navbar-expand-lg navBg">
  <!-- <div class="container-fluid"> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bookings">Bookings</a>
        </li>
      </ul>
    </div>
  <!-- </div> -->
</nav>
    </div>
</template>

<script>

// Saving DHA banner img here: https://i.ibb.co/0QbW3FS/DHA-banner.png

export default {
    name: 'Navbar'
}

</script>

<style scoped>
.navBg {
    background-color: #000000;
}

.dhaBanner{
    width: 75%;
    margin-inline:100px;
}

</style>