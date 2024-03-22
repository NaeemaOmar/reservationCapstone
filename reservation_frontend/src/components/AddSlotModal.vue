<template>
  <div>
    <!-- Button trigger modal -->
    <div class="d-flex justify-content-center">
      <button type="button" class="" data-bs-toggle="modal" :data-bs-target="'#staticBackdropLabel' + randNum">
        Add new slot
      </button>
    </div>

<!-- Modal -->
<div class="modal fade" :id="'staticBackdropLabel' + randNum" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'staticBackdropLabel' + randNum" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="'staticBackdropLabel' + randNum">You are now adding a new slot. NOTE: the randNum = {{ randNum }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6>Please enter the following details to create a new booking slot:</h6>
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>slotID</p>
            <input type="number" v-model="newSlot.slotID">
          </div>
          <div class="col-12 col-sm-6">
            <p>slotDay</p>
            <input type="number" v-model="newSlot.slotDay">
          </div>
          <div class="col-12 col-sm-6">
            <p>slotMonth</p>
            <input type="number" v-model="newSlot.slotMonth">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="" @click="addNewSlot">Add new slot</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default{
  name: "AddSlot",
  props:{
    randNum: Number
  },
  data(){return{
    newSlot:{
      slotID:null,
      slotDay: null,
      slotMonth:null
    }
  }},
  methods:{
    async addNewSlot(){
      try{
        console.log("the addSlot fx of the addSlotModal of the admin pg is now running. Below is the newSlot info that will be sent to the store:")
        let slotID = this.newSlot.slotID
        let slotDay = this.newSlot.slotDay
        let slotMonth = this.newSlot.slotMonth
        let newSlotInfo = { slotID, slotDay, slotMonth}
        console.log(newSlotInfo)
        await this.$store.dispatch('addASlot',newSlotInfo )
      } catch (error){
        console.log(`The following error occured in the addSlot fx of the AddSlotModal of the admin pg: ${error}`)
      }
    }
  }
}

</script>