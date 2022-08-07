

// login page elements
//let loginButton = $('loginbtn');
// set up some routes and then we can connect them to the event listeners
// possibly make this a middleware function 
const login = async (event) => {
    event.preventDefault();

    const user_name = $('#username').val();
    const password = $('#password').val();
    console.log([user_name, password]);
    if(user_name && password) {
        const response = await fetch(`/api/users/login`, {
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
    console.log("hello");
    const first_name = $('#firstname').val();
    const last_name = $('#lastname').val();
    const user_name = $('#username2').val();
    const password = $('#password2').val();
    console.log([first_name, last_name, user_name, password]);
    if(user_name && password && first_name && last_name) {
        const response = await fetch(`/api/users`, {
            method: "POST",
            body: JSON.stringify({ first_name, last_name, user_name, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
// LOGIN PAGE < - - - - - - - - 
  


$('#form1').submit(login);
$('#form2').submit(signup);
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

