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
    // $('#secure-content').load(hashlink + ' #secure-content');
    $('#about-us').load(hashlink + ' #about-us');
    $('#proposal').load(hashlink + ' #proposal');
    //unhide photos; photos preloaded to allow js for arrows to work
    $('#photos').css('display','inline');
    $('#the-wedding').load(hashlink + ' #the-wedding');
    $('#registry').load(hashlink + ' #registry');
    $('#rsvp').load(hashlink + ' #rsvp');
    //switches logins to goTo functions
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