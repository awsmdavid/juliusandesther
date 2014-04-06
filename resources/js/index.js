// fade mask out after load
$(window).load(function () {
    $('#mask').fadeOut('slow');
    $('#date').fadeIn('slow');
    // $('#date').css('display', 'inline');
});

// photo slideshow js
$(function(){
    $('.fadein img:gt(0)').hide();
    $('#photos-leftarrow').click(function(){
        $('.fadein :first-child').fadeOut();
        $('.fadein :last-child').fadeIn();
        $('.fadein :last-child').prependTo('.fadein');
    });
    $('#photos-rightarrow').click(function(){$('.fadein :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fadein');
    });
});

// scroll to section 'id'
function goToByScroll(id){
    $('html,body').stop().animate({scrollTop: ($("#"+id).offset().top)-=150},{duration: 1500, easing: "easeInOutExpo"});
}

// load secure content from secure page
function loadSecureContent(password, id){
    // hashLink is address of the webpage that contains secure content
    var hashlink = "secure"+CryptoJS.MD5(password)+".html";
    alert(hashlink);
    // load content from secure page
    // $('#about-us').load(hashlink + ' #about-us');
    // $('#proposal').load(hashlink + ' #proposal');
    // $('#the-wedding').load(hashlink + ' #the-wedding');
    // $('#registry').load(hashlink + ' #registry');
    // $('#rsvp').load(hashlink + ' #rsvp');
    $('#about-us').load(hashlink + ' #about-us', function(){
    $('#proposal').load(hashlink + ' #proposal',function(){
    $('#the-wedding').load(hashlink + ' #the-wedding', function(){
    $('#registry').load(hashlink + ' #registry',function(){
    $('#rsvp').load(hashlink + ' #rsvp',function(){
 
    // switches nav logins to goTo functions, then scrolls to the section id user clicked on
    $('#nav_item_wrapper').load(hashlink + ' #nav_item_wrapper', function(){
        goToByScroll(id);
    });
    });
    });
    });
    });
    });
    // unhide photos and guestbook; photos and guestbook preloaded to allow js to work properly
    $('#photos').css('display','inline');
    $('#guestbook').css('display','inline');


}

// login
function login(id) {

    // set hashword (what hash of (password + random hash) equals)
    //be0e94d8a2afcab135a8eaef594a3352
    // var theHashword = "fe9b29b33cabd2ea67b9e51e42993735";
    // var thePassword = "11.22.2013";

    // var hashword = CryptoJS.MD5("11.22.2013");

    // var hash = CryptoJS.MD5("11.22.2013"+"2aecc21ce57c973d624175017c3f4616");






    // prompt user for password
    $('.login-form').css('display','inline');
    $('#login-shade').css('display','inline');
    $('#password').focus();
    // enter doubles as submit click
    $(".content").keyup(function(event){
        if(event.keyCode == 13){
            $('#submit-password-button').click();
        }
    });
    // on click of Submit password button
    $('#submit-password-button').click(function(){
        // get user submitted password
        var password = document.getElementById("password").value;
        // if password is correct
        if (CryptoJS.MD5(password+"2aecc21ce57c973d624175017c3f4616")==theHashword){
            // hide password form
            $('.login-form').css('display','none');
            $('#login-shade').css('display','none');
            // load secure content
            loadSecureContent(password, id);
        }
        // if incorrect password
        else {
            $('#incorrect-password-message').css('display','block');
            $('form').get(0).reset();
        }
    });
    // cancel button
    $('#cancel-password-button').click(function(){
        // reset everything
        $('.login-form').css('display','none');
        $('#login-shade').css('display','none');
        $('#incorrect-password-message').css('display','none');
        $('form').get(0).reset();
    });
}