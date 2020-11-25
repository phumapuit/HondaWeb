$(document).ready(function() {
    $('.banner__item').waypoint(function() {
    $('.banner__item').css({
    // animation: "animate-positive 2s",
    animation: "itemsFade 1s ease backwards",
    opacity: "1"
    });
    }, { offset: '95%' });
})