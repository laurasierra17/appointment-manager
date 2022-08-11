// Grabs user input for login and confirms they've already made an account
const login = async (event) => {
    event.preventDefault();

    const user_name = $('#username').val().trim();
    const password = $('#password').val().trim();

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

// Grab user input for the creation of a new account
const signup = async (event) => {
    event.preventDefault();

    const first_name = $('#firstname').val().trim();
    const last_name = $('#lastname').val().trim();
    const user_name = $('#username2').val().trim();
    const password = $('#password2').val().trim();

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

$('#form1').on('submit',login);
$('#form2').on('submit', signup);


// DEPARTMENTS PAGE < - - - - - - - - 

// Serves up page with doctors of that department
$('.dptmentBtn').on('click',async (event) => {
    let dptId = event.target.getAttribute("id");
    
    if(dptId) {
        const response = await fetch(`/api/department/${dptId}`, {
            method: "GET",
        });
        
        if (response.ok) {
            document.location.replace(`/api/department/${dptId}`);
        } else {
            alert(response.statusText);
        }
    }
});

// Functionality for the hamburger menu
(function() {
    var burger = $('.navbar-toggle');
    var menu = $('.navbar-menu');
    burger.on('click', function() {
        burger.toggleClass('is-active');
        menu.toggleClass('is-active');
    });
})();

