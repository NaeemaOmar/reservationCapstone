<template>
    <div>
        <h1>Welcome to eHomeAffairs - eBooking</h1>
        <h3 class="mainBrwnTxt">Services</h3>
        <div class="row d-flex justify-content-evenly">
            <div class="col-4 veryWhitenedBrownBg">Apply for ID</div>
            <div class="col-4 veryWhitenedBrownBg">Apply for Passport</div>
            <div class="col-4 veryWhitenedBrownBg">Apply for VISA</div>
            <div class="col-4 veryWhitenedBrownBg">Birth Certificate</div>

        </div>
        <h3 class="mainBrwnTxt mt-3">Search</h3>
        <div>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button type="submit">Search</button>
      </form>
        </div>
        <h3 class="mainBrwnTxt mt-3">Slots</h3>
        <div class="veryWhitenedBrownBg slotsDiv">
            <div>
                <h3 class="mainBrwnTxt mt-3">April</h3>
            </div>
            <div class="row">
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">1</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">2</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">3</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">4</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">5</div>
            </div>
            <div class="row">
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">8</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">9</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">10</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">11</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">12</div>
            </div>
            <div class="row">
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">15</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">16</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">17</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">18</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">19</div>
            </div>
            <div class="row">
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">22</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">23</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">24</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">25</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">26</div>
            </div>
            <div class="row">
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">29</div>
                <div class="singleSlot lightBg d-flex align-items-center justify-content-center">30</div>
            </div>
        </div>
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


<style>
.mainBrwnTxt{
    color: #C36406;
}

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

.veryWhitenedBrownBg{
    background-color: #F0D8C1;
    border: dotted;
    height: fit-content;
    width: auto;
}

input{
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    max-width: fit-content;
}

.slotsDiv{
    height: 450px;
    width: 550px;
    margin-left: 4%;
}

.singleSlot{
    height: 50px;
    width: 50px;
    border-radius: 15px;
    margin-left: 53px;
    margin-top: 20px;
}

.lightBg{
    background-color: #F2EBD9;
}

</style>