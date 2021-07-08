$(document).ready(function() {

    $('#navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('showNav');
    });


    $('#navbar-toggler').click(function() {
        $(this).toggleClass('animatedNav');
    });



    const date = new Date();
    $('.copyright-date').text(date.getFullYear());
});



$(document).ready(function() {
    $(document).on("scroll", onScroll);


    $('.nav-item a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navChange a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navChange ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

$(function() {

    $(document).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
});

$(function() {

    $(document).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
}
