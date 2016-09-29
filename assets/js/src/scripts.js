$(document).ready(function () {
    var height = $(window).height();
    $('section').css({'height': height});

    $(window).resize(function () {
        var height = $(window).height();
        $('section').css({'height': height});
    });

    ///////////////////////////////////////////////
    //initialize main slider
    ///////////////////////////////////////////////
    var swiper = new Swiper('.slider-container .swiper-container', {
        nextButton: '.next-slide',
        prevButton: '.prev-slide'
    });

    ///////////////////////////////////////////////
    //initialize staff slider
    ///////////////////////////////////////////////
    var swiper = new Swiper('.staff-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0
    });

    ///////////////////////////////////////////////
    //initialize staff quotes slider
    ///////////////////////////////////////////////
    var swiper = new Swiper('.staff-quotes-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0
    });


    ///////////////////////////////////////////////
    //heaeder fixed
    ///////////////////////////////////////////////
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });

    ///////////////////////////////////////////////
    //slider arrows show hide
    ///////////////////////////////////////////////
    $(".slider-container").mouseenter(function () {
        $(".arrows").addClass("active");
    });

    $(".slider-container").mouseleave(function () {
        $(".arrows").removeClass("active");
    });

    ///////////////////////////////////////////////
    //anchor navigate
    ///////////////////////////////////////////////
    var $root = $('html, body');
    $('a').on('click', function(event){
        var hash = this.hash;
        // Is the anchor on the same page?
        if (hash && this.href.slice(0, -hash.length-1) == location.href.slice(0, -location.hash.length-1)) {
            $root.animate({
                scrollTop: $(hash).offset().top
            }, 'normal', function() {
                location.hash = hash;
            });
            return false;
        }
    });

});