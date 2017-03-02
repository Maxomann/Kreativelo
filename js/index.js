$(document).ready(function () {
    var navbarHeight = $('nav').outerHeight();
    var windowHeight = $(window).height();
    $('#landing-header').height(windowHeight-navbarHeight);
    console.log(navbarHeight);
    console.log(windowHeight);
});