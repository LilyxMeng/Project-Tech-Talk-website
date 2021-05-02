var height = window.innerHeight;
var a = setInterval(function () {
    $(window).scrollTop(-1);
    resize();
}, 500); // Don't lower more than 500ms, otherwise there will be animation-problems with the  Safari toolbar

$(window).on('resize', function () {
    resize();
});

var resize = function () {
    if (window.innerHeight != height) {
        height = window.innerHeight;
        $('.section').css('height', height + 'px');
    }
};