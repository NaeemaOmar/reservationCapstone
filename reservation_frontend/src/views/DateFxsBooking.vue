<template>
    <div>
        <!-- Final product starts here -->
        <!-- Logic: i have a slots table that has all the available weekdays. This table has the year, monthNum and dayNum in separate columns. The slotsDiv loops through this table and runs a fx that takes the 3 variables, runs the new Date(yyyy, mm, dd) method followed by the .getDay() method to get the day. Thereafter, this info is stored in an appropriate variable in the data(){return{}} fx of the <script></script> tags. The dayNum of the table is returned as the button name. NOTE: when editing a booking DATE, there needs to be a fx that deletes the existing one. This means that my edit btn should be a DELETE/INSERT INTO combo instead of an UPDATE. (nvm, an UPDATE works just as well.). Dunno if i'll need a sortBy fx for the array we're returning from the workbench in the event that the new row messes up the order  -->
        <div class="veryWhitenedBrownBg">
            <div>ighty</div>
        </div>
        <!-- Final product ends here -->

        <!-- Practice div starts here -->
        <div>
            <h1>First thing = getting input</h1>
            <div class="d-flex justify-content-evenly">
                <input type="number" placeholder="enter month number here" v-model="monthNum">
                <input type="number" placeholder="enter day number here" v-model="dayNum">
                <button @click="getNewDate()">Get new date</button>
            </div>
        </div>
        <!-- Practice div ends here -->
        <!-- Theory div starts here -->
        <div>
            <h1>This page is for testing date fx's</h1>
            <h3>First, we have the 'new Date()' fx: {{ new Date() }}</h3>
            <p>The above returns:Wed Mar 20 2024 10:58:33 GMT+0200 (South Africa Standard Time)</p>
            <h3>Second, we have the 'new Date(milliseconds)' fx: {{ new Date(3000) }}</h3>
            <p>The above returns: Thu Jan 01 1970 02:00:03 GMT+0200 (South Africa Standard Time)</p>
            <p>NOTE: the above fx returns a point in time that is a specific number of milliseconds after Jan 1st, 1970</p>
            <h3>Next, we have the 'new Date(dateString)' fx: {{ new Date(1999-4-2) }} </h3>
            <p>The above returns: Thu Jan 01 1970 02:00:00 GMT+0200 (South Africa Standard Time)</p>
            <p>I don't understand what the above fx does</p>
            <h3>Next, we have the 'new Date(year, monthIndex [, day [, hour [, minutes [, seconds [, milliseconds]]]]])' fx: new Date(1999, 3 [, 2 [, 4 [, 50 [, 25 [, 300]]]]])</h3>
            <p>Something is wrong with the syntax for the above Date() method</p>
            <h1>Below are the different ways to get a specific goal, specifically, 3rd March, 1987</h1>
            <h3>First we have the 'new Date(year, month, day)'. Please note: months are zero-based (like arrays) so use their index number instead of actual number: {{ new Date(1987, 2, 3) }}</h3>
            <p>NOTE: the above returns the day as well as the time</p>
            <h3>Next, we have the 'new Date('year-month-day')': {{ new Date('1987-03-03') }}</h3>
            <p>NOTE: the code above also returns the day and time</p>
            <p>NOTE: the code above takes the date in string form in the yyyy-mm-dd format</p>
            <h3>Next, we have the 'new Date('monthName dayNum, year')': {{ new Date('March 5, 1987') }}</h3>
            <p>NOTE: the code above also returns the day and time</p>
            <p>NOTE: The format is 'March 5, 1987'</p>
            <h3>Next, we have the 'new Date(Date.UTC(1987, 2,3))' form: {{ new Date(Date.UTC(1987, 2,3)) }}</h3>
            <h3>Finally, we have the 'new Date(yyy, monthIndex)' followed by the .setDate(dayNum) method: {{ newDay = new Date(1987, 2)}}</h3>
            <p>For some reason, the .setDate() method is returning nonsense</p>
            <h1>Given a specifc date, the following is the code to get the day</h1>
            <h3>Assign the new Date() to a variable. Then use the .getDay() method to get the specific day name:{{ newDate = new Date(1987, 4, 5) }}, newDay = {{ newDay }}. newDay.getDay = {{ newDay.getDay() }}</h3>
            <p>NOTE: .getDay() returns the index number of the day w/ 0 being Sunday. As such, it is necessary to create an array holding all 7 days so you can say 'return array[resultOf.getDay()]'</p>
            <h1>What do the following methods do: <br> Date.parse() <br> setFullYear() <br> setMonth() <br> setDate() <br>toLocaleString() <br> toLocaleDateString() <br> toLocaleTimeString() <br> getTime() </h1>
    
        </div>
        <!-- Theory div ends here -->
    </div>
</template>

<script>
export default{
    data(){return{
        monthNum:"",
        dayNum: "",
        weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthNames:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }},
    methods:{
        getNewDate(){
            console.log("The getNewDate fx is running below")
            let newDateInfo = `'2024, ${this.monthNum}, ${this.dayNum}'`
            // NB TO NOTE: must say this.monthNum-1 since the Date() method uses index numbering for months
            console.log("The info for the new date is below")
            console.log(newDateInfo)
            let actualNewDate = new Date(newDateInfo)
            console.log("Below is the actual new date")
            console.log(actualNewDate)
            // The code above works flawlessly
            let newDatesName = actualNewDate.getDay()
            console.log("below is the day of the above date:")
            console.log(this.weekDays[newDatesName])
            let newDatesMonth = actualNewDate.getMonth()
            console.log("below is the month of the new date")
            console.log(this.monthNames[newDatesMonth])
            let currentMonth = this.monthNames[newDatesMonth]
            // Below, we'll be trying the indexOf() method
            console.log("Below, we'll be trying the indexOf() method")
            let theindex = this.weekDays.indexOf(currentMonth)
            console.log("below is the indexOf the currentMonth")
            console.log(theindex)
        }
    }
}
</script>