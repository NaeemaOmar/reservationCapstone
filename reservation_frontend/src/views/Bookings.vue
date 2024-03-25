<template>
  <div>
    <!-- Final product starts here -->
    <!-- Logic: i have a slots table that has all the available weekdays. This table has the year, monthNum and dayNum in separate columns. The slotsDiv loops through this table and runs a fx that takes the 3 variables, runs the new Date(yyyy, mm, dd) method followed by the .getDay() method to get the day. Thereafter, this info is stored in an appropriate variable in the data(){return{}} fx of the <script></script> tags. The dayNum of the table is returned as the button name. NOTE: when editing a booking DATE, there needs to be a fx that deletes the existing one. This means that my edit btn should be a DELETE/INSERT INTO combo instead of an UPDATE. (nvm, an UPDATE works just as well.). Dunno if i'll need a sortBy fx for the array we're returning from the workbench in the event that the new row messes up the order  -->

    <!-- BELOW, bookingsModal attempt 3 is running -->
    <div>
        <h1>Welcome to eHomeAffairs - eBooking</h1>
        <h3 class="mainBrwnTxt">Below are the slots available for booking</h3>
        <p>Click any of the slots below and enter the details to create your booking</p>
      <div class="row">
        <!-- <div class="col-12 col-sm-6 col-md-3"></div> -->
        <!-- Above is the original column breakPoints -->
        <div
          class="col-4 col-md-2 d-flex justify-content-evenly mx-sm-auto mb-5"
          v-for="aSlot in this.theSlotsArray"
          :key="aSlot.slotID"
        >
          <BookingsModal :theSlot="aSlot" />
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
      theSlotsArray: [],
      monthNum: "",
      dayNum: "",
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  components: {
    BookingsModal,
  },
  methods: {
    async getAllSlots() {
      try {
        let allTheSlots = await this.$store.dispatch("getSlots");
        console.log(
          "below is the slots array returned fr the getSlots axios in the dateFxs pg"
        );
        console.log(allTheSlots);
        this.theSlotsArray = allTheSlots;
      } catch (error) {
        console.log(
          `The following error occured on the mounted of the DateFxsBooking view when trying to get the slots: ${error}`
        );
      }
    },
    getNewDate() {
      console.log("The getNewDate fx is running below");
      let newDateInfo = `'2024, ${this.monthNum}, ${this.dayNum}'`;
      // NB TO NOTE: must say this.monthNum-1 since the Date() method uses index numbering for months
      console.log("The info for the new date is below");
      console.log(newDateInfo);
      let actualNewDate = new Date(newDateInfo);
      console.log("Below is the actual new date");
      console.log(actualNewDate);
      // The code above works flawlessly
      let newDatesName = actualNewDate.getDay();
      console.log("below is the day of the above date:");
      console.log(this.weekDays[newDatesName]);
      let newDatesMonth = actualNewDate.getMonth();
      console.log("below is the month of the new date");
      console.log(this.monthNames[newDatesMonth]);
      let currentMonth = this.monthNames[newDatesMonth];
      // Below, we'll be trying the indexOf() method
      console.log("Below, we'll be trying the indexOf() method");
      let theindex = this.weekDays.indexOf(currentMonth);
      console.log("below is the indexOf the currentMonth");
      console.log(theindex);
    },
  },
  mounted() {
    this.getAllSlots();
  },
};
</script>
