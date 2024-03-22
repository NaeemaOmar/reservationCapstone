<template>
  <div>
    <h1>Welcome to eHomeAffairs - eBooking</h1>
    <h3 class="mainBrwnTxt">Easy to use, convenient and just a click away</h3>
    <div class="slightlyWhitenedBrownBg mx-3">
      <div class="row d-flex justify-content-evenly">
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="mainWhitishBg innerDiv">
            <form
              @submit.prevent
              action="https://formspree.io/f/xaygazkl"
              method="POST"
            >
            <h5 class="text-start mx-2">
              Get in contact with us by completing the form below:
            </h5>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <h5 class="d-flex justify-content-center">Name</h5>
                  <div class="d-flex justify-content-center ">
                    <input
                      type="name"
                      placeholder="Enter your name here..."
                      v-model="formData.firstName"
                    />
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <h5 class="d-flex justify-content-center mx-2">
                    Surname
                  </h5>
                  <div class="d-flex justify-content-center">
                    <input
                      type="name"
                      placeholder="Enter your surname here..."
                      v-model="formData.lastName"
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-sm-6">
                  <h5 class="d-flex justify-content-center mx-2 mt-3">
                    Email address
                  </h5>
                  <div class="d-flex justify-content-center">
                    <input
                      type="email"
                      placeholder="Enter your email here..."
                      v-model="formData.emailAddress"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="d-flex justify-content-center mx-2 mt-3">
                    Message
                  </h5>
                  <div class="d-flex justify-content-center">
                    <input
                      type="text"
                      placeholder="Type your message here..."
                      v-model="formData.userMessage"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-3 d-flex justify-content-evenly">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="clearInput"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  class="me-4"
                  @click="submitBtn"
                >
                  Submit
                </button>
              </div>
            </form>
            <br /><br />
          </div>
        </div>
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="row">
            <div class="col-12">
              <div class="mainWhitishBg innerDiv">
                <h5 class="text-start mx-2">
                  Contact us directly by phone or Email
                  <br />Home Affairs Headquarters <br />
                  Contact Centre <br />hacc@dha.gov.za <br />Pretoria, Gauteng,
                  South Africa <br />Phone: 0800 601 190 <br />Phone: 012 406
                  2500
                </h5>
              </div>
            </div>
          </div>
          <div class="mainWhitishBg innerDivHalf">
            <h5 class="text-start mx-2">
              Click the icons below to follow us on social media
              <br />
              <span class="mainBrwnTxt">Please note:</span> no Home Affairs
              employee will work online or outside of our offices.
            </h5>
            <div class="row">
              <div class="col-3">
                <a
                  href="https://za.linkedin.com/company/department-of-home-affairs"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin fa-2xl iconStyling"></i>
                </a>
              </div>
              <div class="col-3">
                <a
                  href="https://www.instagram.com/departmentofhomeaffairs/?hl=en"
                  target="_blank"
                >
                  <i
                    class="fa-brands fa-square-instagram fa-2xl iconStyling"
                  ></i>
                </a>
              </div>
              <div class="col-3">
                <a
                  href="https://www.facebook.com/HomeAffairsZA/"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f fa-2xl iconStyling"></i>
                </a>
              </div>
              <div class="col-3">
                <a
                  href="https://twitter.com/HomeAffairsSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  <i class="fa-brands fa-x-twitter fa-2xl iconStyling"></i>
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: null,
        lastName: null,
        emailAddress: null,
        userMessage: null,
      },
    };
  },
  methods:{
    clearInput(){
      this.formData.firstName = null,
      this.formData.lastName = null,
      this.formData.emailAddress = null,
      this.formData.userMessage = null     
    },
    submitBtn(){
      try{
        if(this.formData.firstName && this.formData.lastName && this.formData.emailAddress && this.formData.userMessage){
          alert("You have successfully submitted your message. Thank you for getting in touch with us")
          location.reload()
        }
        else if(this.formData.firstName && this.formData.lastName && this.formData.emailAddress ){
          alert("Please enter your message")
        } 
        else if(this.formData.firstName && this.formData.lastName) {
          alert("Please enter your email address and message")
        } 
        else if(this.formData.firstName) {
          alert("Please enter your lastName, email address and message")
        } else{
          alert("Please ensure all form fields are filled")
        }
      }catch (error){
        console.log(`The following error occured while trying to submit the contactPg's form: ${{error}}`)
      }
    }
  }
};
</script>

<style>
h1,
h3 {
  text-align: start;
  margin-left: 5px;
}

.innerDiv {
  margin-block: 12px;
}

.innerDivHalf {
  margin-bottom: 12px;
}

.iconStyling {
  color: #c36406;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
  border-color: #343a40;
}
</style>
