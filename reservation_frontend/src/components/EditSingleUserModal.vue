<template>
    <div>
        <!-- Button trigger modal -->
        <div class="d-flex justify-content-center">
            <button type="button" class="" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+userID">
              Edit Details
            </button>
        </div>

<!-- Modal -->
<div class="modal fade" :id="'staticBackdrop'+userID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'staticBackdropLabel'+userID" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="'staticBackdropLabel'+userID">The currentUserId = {{ this.userID }}. <br>You are now changing your personal details.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6>Please enter the details you would like to update:</h6>
        <div class="row">
            <div class="col-12 col-sm-6">
                <p>firstName</p>
                <input type="text" v-model="updatedUserInfo.firstName">
            </div>
            <div class="col-12 col-sm-6">
                <p>lastName</p>
                <input type="text" v-model="updatedUserInfo.lastName">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="" @click="editCurrentUserDeets">Edit details</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default{
    name:"EditSingleUser",
    props:{
        userID: Number
    },
    data(){return{
        updatedUserInfo:{
            userID: null,
            firstName: null,
            lastName: null
        }
    }},
    methods:{
        async editCurrentUserDeets(){
            console.log("The editCurrentUserDeets fx of the editSingleUser modal is running now (adminPg OR userProfile pg). Below is the updatedUserInfo variable that will be sent to the store:")
            let userID = this.userID
            let firstName = this.updatedUserInfo.firstName
            let lastName = this.updatedUserInfo.lastName
            let updatedUserDeets = {userID, firstName, lastName}
            console.log(updatedUserDeets)
            await this.$store.dispatch('editTheUser', updatedUserDeets )
            console.log("Since the userDetails have been updated on mySQL successfully, now we will update the localStorage")
            let [fullUserDeets] = await this.$store.dispatch("getAUser", userID);            
            console.log("Below is the fullUserDeets for the updated user:")
            console.log(fullUserDeets)
            localStorage.setItem("fullUserDeets", JSON.stringify(fullUserDeets));
            location.reload()
        }
    }
}
</script>