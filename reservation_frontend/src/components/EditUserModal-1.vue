<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="staticBackdropLabel">You have chosen to edit the following user: "{{ user.firstName }}"</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>You may edit the following details of the user:</h5>
            <p>First name:{{ user.firstName }}</p>
            <input type="text" placeholder="Enter the new firstname" v-model="user.firstName">
            <p>Last name:</p>
            <input type="text" placeholder="Enter the new lastname" v-model="user.lastName">
            <!-- <p>Gender:</p>
            <input type="text" placeholder="Enter the new gender" v-model="user.gender">
            <p>User role:</p>
            <input type="text" placeholder="Enter the new user role" v-model="user.userRole">
            <p>User Language:</p>
            <input type="text" placeholder="Enter the new user language" v-model="user.userLanguage"> -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" @click="editUser(this.user)">Edit details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EditUser',
    props:{
        user: Object
    },
    data (){
        return{
            user:{
                userID:1,
                firstName:null,
                lastName: null,
                // gender: "checkGender",
                // userRole: "checkUserRole",
                // userLanguage: "checkLanguage"
            }
        }
    },
    methods:{
       async editUser (user){
        try{
            console.log("The editUser fx is running in the editUser modal")
            this.$store.dispatch('editTheUser', this.user)
        } catch(error){
            console.log(`The following error occured while trying to run the editUser fx in the editUser modal: ${error}`)
        }
       }
    }
}
</script>

<style>
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