<template>
    <div>
                <!-- MODAL STARTS HERE -->
        <!-- Button trigger modal -->
<button type="button" class="btn singleSlot" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+dayNumber">
  {{dayNumber}}
</button>

<!-- Modal -->
<div class="modal fade" :id="'staticBackdrop'+dayNumber" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'staticBackdropLabel'+dayNumber" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content veryWhitenedBrownBg">
      <div class="modal-header">
        <h5 class="modal-title" :id="'staticBackdropLabel'+dayNumber">You have chosen to come in on: {{ dayName }}, {{ dayNumber }} April 2024</h5>
        <button type="button" class="btn-close mt-5" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mainBrownBg_modal">
          <div class="mainBrwnBg topHeight"></div>
            <div class="veryWhitenedBrownBg_modal">
                <div class="row">
                    <div class="col-6">
                        <p class="mt-3">ID number</p>
                        <input type="text" v-model="newBooking.userID">
                    </div>
                    <div class="col-6">
                        <p class="mt-3">Language</p>
                        <input type="text" v-model="newBooking.userLanguage">
                    </div>
                </div>
                <p class="mt-3">Choose the time</p>
                <input type="text" v-model="newBooking.userTime">
                <p class="mt-3">Choose the Service</p>
                <input type="text" v-model="newBooking.userService">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn" @click="addABooking">Create booking</button>
      </div>
    </div>
  </div>
</div>
<!-- MODAL ENDS HERE -->
    </div>
</template>

<script>
export default {
    name: 'BookingsModal',
    props: {
    dayNumber: Number,
    dayName: String
  },
  data (){
    return{
      newBooking: {
        userID: null,
        userLanguage: null,
        userTime: null,
        userService: null
      }
    }},
  methods:{
    addABooking(){
      try {
        this.$store.dispatch('addBooking', this.newBooking);
        console.log(`You have successfully created the following booking: userID = ${newBooking.userID}, userLanguage = ${newBooking.userLanguage}, userTime = ${newBooking.userTime}, userService: ${newBooking.userService}`)
        location.reload();
      } catch (error){console.log(`the following error was found in the bookings modal when trying to add a new booking: ${error}`);
      location.reload();
    }
    }
  }
}
</script>

<style>
.mainBrownBg_modal{
    background: #C36406;
    height: 300px;
    width: 460px;
}

.mainBrownBorder{
  border-color: #C36406;
}

.topHeight{
  height: 4px;
}

.veryWhitenedBrownBg_modal{
    background-color: #F0D8C1;
    height: 292px;
    width: 452px;
    margin-left: 4px;
    /* margin-top: 10px; */
}

.singleSlot{
    height: 50px;
    width: 50px;
    border-radius: 15px;
    border-color: #F0D8C1;
    background-color: #F2EBD9;
    margin-left: 53px;
    margin-top: 20px;
}
</style>