$(document).ready(function() {

    $('#navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('showNav');
    });


    $('#navbar-toggler').click(function() {
        $(this).toggleClass('animatedNav');
    });


    $(window).scroll(function() {
        let position = $(window).scrollTop();
        if (position >= 60) {
            $('.navbar-wrapper').removeClass('container');
            $('.navbar-wrapper').addClass('fxd-navbar-wrapper');
        } else {
            $('.navbar-wrapper').addClass('container');
            $('.navbar-wrapper').removeClass('fxd-navbar-wrapper');
        }
    });



    const date = new Date();
    $('.copyright-date').text(date.getFullYear());
});



