<template>
    <div>
                <!-- MODAL STARTS HERE -->
        <!-- Button trigger modal -->
<button type="button" class="" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+dayNumber">
 edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'staticBackdrop'+dayNumber" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'staticBackdropLabel'+dayNumber" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
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
    name: 'EditUser',
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
button {
  background-color: #C36406;
  color: #343A40 ;
  border-radius: 20px;
  border-color: #C36406;
  border: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
</style>