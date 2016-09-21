$(document).ready(function () {
    var height = $(window).height();
    $('section').css({'height': height});

    $(window).resize(function () {
        var height = $(window).height();
        $('section').css({'height': height});
    });

    //initialize main slider
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.next-slide',
        prevButton: '.prev-slide'
    });

});