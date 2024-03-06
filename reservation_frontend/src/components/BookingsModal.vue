<template>
    <div>
                <!-- MODAL STARTS HERE -->
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content veryWhitenedBrownBg">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">You have chosen to come in on: "{{ theDay }}", "{{ theDate }}"</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mainBrownBg_modal">
            <div class="veryWhitenedBrownBg_modal">
                <div class="row">
                    <div class="col-6">
                        <p class="mt-3">ID number</p>
                        <input type="text">
                    </div>
                    <div class="col-6">
                        <p class="mt-3">Language</p>
                        <input type="text">
                    </div>
                </div>
                <p class="mt-3">Choose the time</p>
                <input type="text">
                <p class="mt-3">Choose the Service</p>
                <input type="text">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
<!-- MODAL ENDS HERE -->
    </div>
</template>

<script>
export default {
    name: 'BookingsModal'
}
</script>

<style>
.mainBrownBg_modal{
    background: #C36406;
    height: 300px;
    width: 460px;
}

.veryWhitenedBrownBg_modal{
    background-color: #F0D8C1;
    height: 292px;
    width: 452px;
    margin-left: 4px;
    margin-top: 10px;
}
</style>