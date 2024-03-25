<template>
    <div class="blackBg footerHeight
">
            <br>
            <div class="mx-3">
                <!-- <br><br> -->
                <!-- <br> doesn't work in the presence of the d-flex but works otherwise-->
                <p class="mainBrwnTxt txtAlignCenter">&copy NaeemaOmar {{currentYear}}</p>
            </div>
    </div>
</template>

<script>
export default {
    data(){return{
        currentYear:null
    }},
    methods:{

    },
    mounted(){
        try{
            let currentDate = new Date()
            let theYear = currentDate.getFullYear()
            console.log(`The current year is: ${theYear}`)
            this.currentYear = theYear
        } catch(error){
            console.log(`The following error occured while trying to get the current year in the mounted of the footer: ${error}`)
        }
    }
}
</script>

<style>
.footerHeight{
    height: 60px;
    /* 130px height at 700px screen */
    /* 150px height at 700px screen */

}

.verticalCenter{
    margin-block: center;
}

.marginStart{
    /* margin-inline-start: 0px; */
    margin-inline: 0px;
}


</style>