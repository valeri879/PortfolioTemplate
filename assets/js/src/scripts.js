$(document).ready(function() {
    var height = $(window).height();
    $('section').css({ 'height': height });

    $(window).resize(function() {
        $('section').css({ 'height': height });
    });

    //initialize main slider
    var swiper = new Swiper('.swiper-container');

});