$(document).ready(function () {
    var height = $(window).height();
    $('.section').css({'height': height});

    $(window).resize(function () {
        var height = $(window).height();
        $('.section').css({'height': height});
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
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0
    });

    ///////////////////////////////////////////////
    //initialize staff quotes slider
    ///////////////////////////////////////////////
    var swiper = new Swiper('.gallery-slider .swiper-container', {
        slidesPerView: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
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
    $('a').on('click', function (event) {
        var hash = this.hash;
        // Is the anchor on the same page?
        if (hash && this.href.slice(0, -hash.length - 1) == location.href.slice(0, -location.hash.length - 1)) {
            $root.animate({
                scrollTop: $(hash).offset().top
            }, 'normal', function () {
                location.hash = hash;
            });
            return false;
        }
    });

    ///////////////////////////////////////////////
    //scroll top
    ///////////////////////////////////////////////
    $(".scroll-top").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 2500);
    });

    ///////////////////////////////////////////////
    //mobile navigation menu
    ///////////////////////////////////////////////
    $(".mobile-menu-button").on("click", function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("active");
    });

    $(".mobile-nav a").on("click", function () {
        $(".mobile-nav, .mobile-menu-button").removeClass("active");
    });

    ///////////////////////////////////////////////
    //membership changes
    ///////////////////////////////////////////////
    $(".price-list-info").on("click", function () {
        $(".price-list-info").removeClass("active");
        $(this).addClass("active");
    });


    AOS.init();

});