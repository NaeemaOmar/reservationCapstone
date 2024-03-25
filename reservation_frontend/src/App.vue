<template>
  <div>
    <div class="bgGradient">
        <Navbar/>
      <div class="viewDiv mx-auto">
        <p class="mainBrwnTxt txtAlignCenter blackBg mx-auto">Disclaimer: this is a dha eBooking site created as part of a capstone project</p>
        <router-view/>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

// import Navbar from ''

export default {
  components: {
    Navbar,
    Footer
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  height: 80px;
  width: 75%;
  /* margin-inline: 100px; */
}

nav a {
  font-weight: bold;
  /* color: #C36406; */
  /* border: dotted; */
}

.nav-link:hover {
  color: #EBCBAC;
}

.navbar-nav .nav-item .nav-link.router-link-exact-active {
  color: #EBCBAC;
}

button:hover {
  background-color: #C36406;
  box-shadow: 0 0 10px 5px #C36406;  
  transform: scale(1.2);

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
  /* margin-inline: 100px; */
}

.mainWhitishBg{
  background-color: #f2ebd9;
}

.darkGreyBg{
  background-color: #2c3e50;
}

.txtStart{
  text-align: start;
}

input{
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    max-width: fit-content;
    border-color: #C36406;
    border-width: 5px;
    border-radius: 5px;
    background-color: #EBCBAC;
}

button {
  background-color: #C36406;
  color: #343A40 ;
  border-radius: 20px;
  border-color: #C36406;
  border: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.mainBrwnTxt{
    color: #C36406;
}

.mainBrwnBg{
    background-color: #C36406;
}

.veryWhitenedBrownBg{
    background-color: #F0D8C1;
    border: dotted;
    height: fit-content;
    width: auto;
}

.slightlyWhitenedBrownBg{
  background-color: #EBCBAC;
}

.blackBg{
  background-color: #000000;
}

.txtAlignCenter{
  text-align: center;
}

.profileIcon {
  height: 100px;
}

.profileIconDiv {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

</style>
