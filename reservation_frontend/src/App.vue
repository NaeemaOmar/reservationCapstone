<template>
  <div>
    <div class="bgGradient">
      <Navbar/>
      <div class="viewDiv">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'

// import Navbar from ''

export default {
  components: {
    Navbar,
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 80px;
  width: 75%;
  margin-inline: 100px;
}

nav a {
  font-weight: bold;
  color: #C36406;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

/* CUSTOM STYLING STARTS HERE */
.bgGradient{
  height: 100%;
  background-image: linear-gradient(#C36406, #ffffff);
  background-attachment: fixed;
  background-size: cover ;
  /* background-image: url(https://i.postimg.cc/1Xc3rB2G/server-room.png);
  height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; */
}

.viewDiv{
  background-color: #F2EBD9;
  width: 75%;
  margin-inline: 100px;
}

</style>
