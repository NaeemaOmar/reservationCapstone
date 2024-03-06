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
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">1</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">2</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">3</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">4</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">5</button>
            </div>
            <div class="row">
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">8</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">9</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">10</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">11</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">12</button>
            </div>
            <div class="row">
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">15</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">16</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">17</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">18</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">19</button>
            </div>
            <div class="row">
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">22</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">23</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">24</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">25</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">26</button>
            </div>
            <div class="row">
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">29</button>
                <button class="singleSlot lightBg d-flex align-items-center justify-content-center">30</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.mainBrwnTxt{
    color: #C36406;
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