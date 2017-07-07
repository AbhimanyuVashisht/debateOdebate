/**
 * Created by av on 6/7/17.
 */

let users = [];

$(function () {

});

function login() {
    let name = $('#name');
    let email = $('#email');
    let pswd = $('#pswd');
    let sub = $('#sub');

    users.push(new user(name.val(), email.val(),pswd.val(), sub.val()));
    console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
    window.alert("Successfully Registerd");
}

function user(name,email,pswd,sub) {
    return{
        name: name,
        email: email,
        pswd: pswd,
        sub:sub
   }

}
