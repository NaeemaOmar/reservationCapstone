<template>
  <div>
    <h1>Welcome to eHomeAffairs - eBooking</h1>
    <h3 class="mainBrwnTxt">Easy to use, convenient and just a click away</h3>
    <div class="slightlyWhitenedBrownBg mx-3">
      <div class="row d-flex justify-content-evenly">
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
          <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              To register,
              <span class="mainBrwnTxt"
                >use your ID number as the username.</span
              >
              <br />
              A <span class="mainBrwnTxt">one-time-pin (OTP)</span> will be sent
              to your cellphone so please ensure you have your cellphone near
              you.
              <br />
              Please note: the
              <span class="mainBrwnTxt">number you use to register</span> is
              where any sms <span class="mainBrwnTxt">notifications</span> from
              the department will be sent to.
            </h5>
            <br />
            <h5 class="d-flex justify-content-start mx-2">
              Username (ID number)
            </h5>
            <input type="number" placeholder="Enter your ID number..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Cellphone</h5>
            <input type="number" placeholder="Enter cellphone number..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input type="password" placeholder="Enter password here..." />
            <br /><br />
            <button class="my-3">Register</button>
          </div>
        </div>
        <div class="col-12 col-sm-5 mx-1 mainBrwnBg">
            <div class="mainWhitishBg innerDiv">
            <h5 class="text-start mx-2">
              To login, enter your username (ID number) and password.
              <br>
              <span class="mainBrwnTxt"
                >Register</span
              > if you do not have an account.
              <br />
              A <span class="mainBrwnTxt">one-time-pin (OTP)</span> will be sent
              to your cellphone so please ensure you have your cellphone near
              you.
              <br />
              Please note: you will receive the OTP via the
              <span class="mainBrwnTxt">number you used to register</span>
            </h5>
            <br />
            <h5 class="d-flex justify-content-start mx-2">
              Username (ID number)
            </h5>
            <input type="number" class="d-flex justify-content-start mx-2" placeholder="Enter your ID number..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">Password</h5>
            <input type="password" class="d-flex justify-content-start mx-2" placeholder="Enter password here..." />
            <h5 class="d-flex justify-content-start mx-2 mt-3">OTP</h5>
            <input class="d-flex justify-content-start mx-2" type="number" placeholder="Enter cellphone number..." />
            <br>
            <button class="my-3">Login</button>
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
</style>
