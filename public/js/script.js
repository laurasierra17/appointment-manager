const loginButton = $('loginbtn');
const USERNAME = $('username');
const PASSWORD = $('password');
const signupButton = $('signupbtn');
// set up some routes and then we can connect them to the event listeners
// possibly make this a middleware function 
$(loginButton).click(() => {
    if(USERNAME && PASSWORD) {
        fetch(`/api/patient/${USERNAME}`, {
            method: "GET",
            body: JSON.stringify({
              username: USERNAME,
              password: PASSWORD  
            })
        })
    }
})

// LOGIN PAGE < - - - - - - - - 
$(signupButton).click(() => {
    if(USERNAME && PASSWORD) {
        fetch(`/api/patient/${USERNAME}`, {
            method: "POST",
            body: JSON.stringify({
                username: USERNAME,
                password: PASSWORD
            })
        })
    }
})
// when we log in
// const 
//fetch(/api/email)

//when we sign up
// const
//fetch(api/patients) {
 //   method: 'POST',
   // headers: {
  //    'Content-Type': '/json',
  //  },




// DEPARTMENTS PAGE < - - - - - - - - 

//user clicks department tile

//fetch(/doctors/department)
// GET
// serves up page with doctors of that department





// DOCTOR PAGE/CREATE APPOINTMENT < - - - - - - - - 
// const
// fetch(doctors/appointements)

