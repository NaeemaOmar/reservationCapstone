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
    <br>
    <h3 class="mainBrwnTxt mt-3">Search</h3>
    <div>
      <form class="d-flex">
        <input
          class="form-control searchInput me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button type="submit" class="txtStart">Search</button>
      </form>
    </div>
    <br>
    <h3 class="mainBrwnTxt mt-3">v-for version of Slots</h3>
    <div class="veryWhitenedBrownBg slotsDiv mx-auto">
      <div>
        <h3 class="mainBrwnTxt mt-3">April</h3>
      </div>
      <div class="row">
        <div
          class="col-2"
          v-for="(dayNumber2, index) in dayNumbersRow1"
          :key="index"
        >
            <BookingsModal :dayNumber="dayNumber2" :dayName="dayNames[index]"/>
        </div>
      </div>
      <div class="row">
        <div
          class="col-2"
          v-for="(dayNumber2, index) in dayNumbersRow2"
          :key="index"
        >
            <BookingsModal :dayNumber="dayNumber2" :dayName="dayNames[index]" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-2"
          v-for="(dayNumber2, index) in dayNumbersRow3"
          :key="index"
        >
            <BookingsModal :dayNumber="dayNumber2" :dayName="dayNames[index]" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-2"
          v-for="(dayNumber2, index) in dayNumbersRow4"
          :key="index"
        >
            <BookingsModal :dayNumber="dayNumber2" :dayName="dayNames[index]" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-2"
          v-for="(dayNumber2, index) in dayNumbersRow5"
          :key="index"
        >
            <BookingsModal :dayNumber="dayNumber2" :dayName="dayNames[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookingsModal from "@/components/BookingsModal.vue";

export default {
  data() {
    return {
      dayNumbersRow1: [1, 2, 3, 4, 5],
      dayNumbersRow2: [8, 9, 10, 11, 12],
      dayNumbersRow3: [15, 16, 17, 18, 19],
      dayNumbersRow4: [22, 23, 24, 25, 26],
      dayNumbersRow5: [29, 30],
      dayNames:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    };
  },
  components: {
    BookingsModal,
  },
};
</script>

<style>
.searchInput {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  max-width: fit-content;
  border: none;
  border-radius: 5px;
  background-color: #ebcbac;
}

.slotsDiv {
  height: 450px;
  width: 550px;
  /* margin-left: 4%; */
}

/* .singleSlot{
    height: 50px;
    width: 50px;
    border-radius: 15px;
    border-color: #F0D8C1;
    margin-left: 53px;
    margin-top: 20px;
} */

.lightBg {
  background-color: #f2ebd9;
}
</style>
