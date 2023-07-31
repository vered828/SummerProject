var dataLoggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {};

document.getElementById('hello').innerHTML = "Hello " + dataLoggedUser.userName;
