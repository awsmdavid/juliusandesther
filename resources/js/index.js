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

$(window).load(function () {
    $('#mask').fadeOut('slow');
});


var thePassword = "craps";
password=prompt('Enter Password','');
password=md5(password);
if(md5(password) == thePassword){ window.location = password + "/"; }
else { alert("incorrect"); }




