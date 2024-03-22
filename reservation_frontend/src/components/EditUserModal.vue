<template>
  <div>
    <!-- editUser modal starts here -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdropLabel' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'#staticBackdropLabel' + user.userID"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'#staticBackdropLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              :id="'#staticBackdropLabel' + user.userID"
            >
              This edit is for the following user: userID =
              {{ user.userID }}, firstName = {{ user.firstName }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>
              You can edit the following details:
            </h5>
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>firstName</p>
                <input
                  type="number"
                  placeholder="Enter the new firstName"
                  v-model="newDeets.firstName"
                />
              </div>
              <div class="col-12 col-sm-6">
                <p>lastName</p>
                <input
                  type="number"
                  placeholder="Enter the new lastName"
                  v-model="newDeets.lastName"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="">
              Edit user
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- editUser modal ends here -->
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
      newDeets: {
        userID: null,
        firstName: null,
        lastName: null,
      },
    };
  },
  methods: {
  },
};
</script>
