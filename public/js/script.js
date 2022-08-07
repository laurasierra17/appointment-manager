

// login page elements
//let loginButton = $('loginbtn');
// set up some routes and then we can connect them to the event listeners
// possibly make this a middleware function 
const login = async (event) => {
    event.preventDefault();

    const username1 = $('username').value;
    const password1 = $('password').value;

    if(username1 && password1) {
        const response = await fetch(`/api/users/${username1}`, {
            method: "POST",
            body: JSON.stringify({ username1, password1 }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const signup = async (event) => {
    event.preventDefault();

    const firstName = $('firstname').value;
    const lastName = $('lastname').value;
    const username2 = $('username2').value;
    const password2 = $('password2').value;
    if(username2 && password2 && firstName && lastName) {
        const response = await fetch(`/api/users`, {
            method: "POST",
            body: JSON.stringify({ firstName, lastName, username2, password2 }),
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
// LOGIN PAGE < - - - - - - - - 
  


document.getElementById('loginbtn').addEventListener('submit', login);
document.getElementById('signupbtn').addEventListener('submit', signup)
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


// Functionality for the hamburger menu
// (function() {
//     var burger = $('.navbar-toggle');
//     var menu = $('.navbar-menu');
//     burger.click(function() {
//         burger.toggleClass('is-active');
//         menu.toggleClass('is-active');
//     });
// })();

