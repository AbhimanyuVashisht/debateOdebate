/**
 * Created by av on 7/7/17.
 */

let users = [];

$(function () {
   retrieveUsers();
});

function retrieveUsers() {
    let savedUsers = localStorage.getItem('users');
    if(savedUsers) {
        users = JSON.parse(savedUsers);
    }
}


function login() {
    let userEmail = $('#email');
    let pswd = $('#pswd');

    if(!userEmail.val()){
        alert("Enter your Email to Login");
        return;
    }


    if(!pswd.val()){
        alert("Enter your Password");
        return;
    }


    authUser(userEmail.val(), pswd.val());
}

function authUser(Email, pswd) {
    for(i in users){
        console.log(pswd  + "    " + users[i].pswd);
        if(Email === users[i].email && pswd === users[i].pswd){
            alert("Successfully LoggedIn");
            return;
        }
    }
    loginMessageToDOM();
}

function loginMessageToDOM() {
    let messageElement = $('#login-message');
    messageElement.empty();
    messageElement.append($(`<p class="text-danger" align="center">*Invalid Email or Password</p>`));
}