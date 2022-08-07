

// login page elements
//let loginButton = $('loginbtn');
// set up some routes and then we can connect them to the event listeners
// possibly make this a middleware function 
const login = async (event) => {
    event.preventDefault();

    const user_name = $('#username').value;
    const password = $('#password').value;

    if(username && password) {
        const response = await fetch(`/api/users/${user_name}`, {
            method: "POST",
            body: JSON.stringify({ user_name, password }),
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

    const first_name = $('#firstname').value;
    const last_name = $('#lastname').value;
    const user_name = $('#username2').value;
    const password = $('#password2').value;
    if(user_name && password && first_name && last_name) {
        const response = await fetch(`/api/users`, {
            method: "POST",
            body: JSON.stringify({ first_name, last_name, user_name, password }),
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
// LOGIN PAGE < - - - - - - - - 
  


document.getElementById('loginbtn').addEventListener('click', login);
document.getElementById('signupbtn').addEventListener('click', signup);
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

