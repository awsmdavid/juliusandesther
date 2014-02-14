$(window).load(function () {
    $('#mask').fadeOut('slow');
});

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

function goToByScroll(id){
    $('html,body').stop().animate({scrollTop: ($("#"+id).offset().top)-=150},{duration: 1500, easing: "easeInOutExpo"});
}


function loadSecureContent(password, id){
    var hashlink = "secure"+CryptoJS.MD5(password)+".html";
    // load divs
    $('#about-us').load(hashlink + ' #about-us');
    $('#proposal').load(hashlink + ' #proposal');
    $('#the-wedding').load(hashlink + ' #the-wedding');
    $('#registry').load(hashlink + ' #registry');
    $('#rsvp').load(hashlink + ' #rsvp');

    // unhide photos and guestbook; photos and guestbook preloaded to allow js for arrows to work
    $('#photos').css('display','inline');
    $('#guestbook').css('display','inline');

    // switches nav logins to goTo functions
    $('#nav_item_wrapper').load(hashlink + ' #nav_item_wrapper', function(){
        goToByScroll(id);
    });
}

function login(id) {
    // use to generate future pws
    // var thePassword = "craps";
    // var hashword = CryptoJS.MD5("craps");
    // var hash = CryptoJS.MD5("craps"+"2aecc21ce57c973d624175017c3f4616");

    var theHashword = "de59daa1a72b6c1155b05eef4a431ec4";
    var password=prompt('Enter Password','');




    if (CryptoJS.MD5(password+"2aecc21ce57c973d624175017c3f4616")==theHashword){
        loadSecureContent(password, id);
    }
    else {
        alert("incorrect password =(");
    }
   
}

//facebook guestbook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=499053793501453";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));