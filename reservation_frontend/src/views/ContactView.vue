<template>
  <div>
    <h1>Welcome to eHomeAffairs - eBooking</h1>
    <h3 class="mainBrwnTxt">Easy to use, convenient and just a click away</h3>
    <div class="slightlyWhitenedBrownBg mx-3">
      <div class="row d-flex justify-content-evenly">
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              Get in contact with us by completing the form below:
            </h5>
            <br />
            <h5 class="d-flex justify-content-start mx-2">Name</h5>
            <input type="name" placeholder="Enter your name here..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Surname</h5>
            <input type="name" placeholder="Enter your surname here..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">
              Email address
            </h5>
            <input type="email" placeholder="Enter your email here..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Message</h5>
            <input type="text" placeholder="Type your message here..." />
            <br /><br />
            <button class="my-3">Submit</button>
          </div>
        </div>
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="row">
            <div class="col-12">
                <div class="mainWhitishBg innerDiv">
                    <h5 class="text-start mx-2">
                      Contact us directly by phone or Email
                      <br />Home Affairs Headquarters 
                      <br> Contact Centre
                      <br>hacc@dha.gov.za 
                      <br>Pretoria, Gauteng, South Africa
                      <br>Phone: 0800 601 190 
                      <br>Phone: 012 406 2500
                    </h5>
                </div>
            </div>
          </div>
          <div class="mainWhitishBg innerDivHalf">
            <h5 class="text-start mx-2">
              Click the icons below to follow us on social media
              <br />
              <span class="mainBrwnTxt">Please note:</span> no Home Affairs employee will work online or outside of our offices.
            </h5>
            <div class="row">
                <div class="col-3">
                    <a href="https://za.linkedin.com/company/department-of-home-affairs" target="_blank">
                        <i class="fa-brands fa-linkedin fa-2xl iconStyling"></i>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.instagram.com/departmentofhomeaffairs/?hl=en" target="_blank">
                        <i class="fa-brands fa-square-instagram fa-2xl iconStyling"></i>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.facebook.com/HomeAffairsZA/" target="_blank">
                        <i class="fa-brands fa-facebook-f fa-2xl iconStyling"></i>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://twitter.com/HomeAffairsSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                        <i class="fa-brands fa-x-twitter fa-2xl iconStyling"></i>
                    </a>
                </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

.iconStyling{
    color: #C36406;
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
    border-color: #343A40;
}

</style>
