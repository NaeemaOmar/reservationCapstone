<template>
  <div>

    <!-- bootstrap modal starts here -->
    <!-- Button trigger modal -->
<button type="button" class="" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+currentUserDeets.userID">
  edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'staticBackdrop'+currentUserDeets.userID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="'staticBackdrop'+currentUserDeets.userID" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="'staticBackdrop'+currentUserDeets.userID">You have chosen to edit the following user: {{ user.userID }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- <p>the currentUserDeets.userID variable has the following value: {{ this.currentUserDeets.userID }}</p> -->
        <h6>You can change the following details:</h6>
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>firstName</p>
            <input type="text" v-model="newDeets.firstName">
          </div>
          <div class="col-12 col-sm-6">
            <p>lastName</p>
            <input type="text" v-model="newDeets.lastName">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="" @click="editUserDeets">Edit user details</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "EditUser",
    props: {
      user: Object
  },
  data() {
    return {
      currentUserDeets:{
        userID: this.user.userID
      },
      newDeets: {
        firstName: null,
        lastName: null,
      },
    };
  },
  methods: {
    async editUserDeets(){
      try{
        let firstName = this.newDeets.firstName
        let lastName = this.newDeets.lastName
        let userID = this.user.userID
        console.log("Below is the newuser details object being sent to the axios from the editUser modal")
        let newUserDeets = {userID, firstName, lastName}
        console.log(newUserDeets)
        await this.$store.dispatch('editTheUser', newUserDeets )
        location.reload()
      } catch (error){
        console.log(`The following error occured in the editUser fx of the editUser modal of the admin pg: ${error}`)
      }
    }
  },
};
</script>
