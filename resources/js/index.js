$(window).load(function () {
    $('#mask').fadeOut('slow');
});

function login() {
    // use to generate future pws
    // var thePassword = "craps";
    // var hashword = CryptoJS.MD5("craps");
    // var hash = CryptoJS.MD5("craps"+"2aecc21ce57c973d624175017c3f4616");

    var theHashword = "de59daa1a72b6c1155b05eef4a431ec4";
    var password=prompt('Enter Password','');
    if (CryptoJS.MD5(password+"2aecc21ce57c973d624175017c3f4616")==theHashword){
        window.location = "secure"+CryptoJS.MD5(password)+".html";
    }
    else {
        alert("incorrect password =(");
    }
}