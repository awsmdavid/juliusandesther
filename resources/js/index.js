$(window).load(function () {
    $('#mask').fadeOut('slow');
});

function login() {
    var thePassword = "craps";
    var password=prompt('Enter Password','');
    if (password==thePassword){
        window.location = "secure.html";
    }
    else {
        alert("incorrect password =(");
    }
}