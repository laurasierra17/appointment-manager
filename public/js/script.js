
// login page elements
let loginButton = $('loginbtn');
let username1 = $('username').value;
let password1 = $('password').value;
let signupButton = $('signupbtn');
let username2 = $('username2').value;
let password2 = $('password2').value;
let firstName = $('firstname').value;
let lastName = $('lastname').value;
// set up some routes and then we can connect them to the event listeners
// possibly make this a middleware function 
$(loginButton).click(() => {
    if(username1 && password1) {
        fetch(`/api/patient/${username1}`, {
            method: "GET",
            body: JSON.stringify({
              username: username1,
              password: password1  
            })
        })
    }
})

// LOGIN PAGE < - - - - - - - - 
$(signupButton).click(() => {
    if(username2 && password2 && firstname && lastname) {
        fetch(`/api/patient/${username2}`, {
            method: "POST",
            body: JSON.stringify({
                username: username2,
                password: password2,
                first_name: firstName,
                last_name: lastName
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

