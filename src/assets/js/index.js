
var midleTopSection = function () {

    var $textDoomObj = $("#top-section").find("#text");
    var top = $("#top-section").height() / 2 - $textDoomObj.height() / 2;
    var left = $("#top-section").width() / 2 - $textDoomObj.width() / 2;
    if ($(document).width() > 742) {
        top -= 100;
    }
    var windowLeft = $("#top-section").width() / 2 - $("#desccription").find("#window").width() / 2;

    $textDoomObj.css({
        "top": top,
        "left": left
    });

    $("#desccription").find("#window").css({
        "left": windowLeft
    });


};

$(function () {

    midleTopSection();

    var canvasDiv = document.getElementById('particle-canvas');

    var options = {
        particleColor: '#888',
        interactive: true,
        speed: 'medium',
        density: 'high',
        background: "https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg"
    };

    var particleCanvas = new ParticleNetwork(canvasDiv, options);


});

$(window).on("resize", function () {
    midleTopSection();
});

$(window).on("scroll", function () {

    var scroll = $(document).scrollTop();

    if (scroll > 50) {

        $("header").removeClass("start");
        $("header").css({
            "top": "0",
            "position": "fixed"
        });
        $("header").addClass("hoverable");

    } else {

        $("header").addClass("start");
        $("header").css({
            "top": "30px",
            "position": "absolute"
        })
        $("header").removeClass("hoverable");

    }

    if (
        scroll > 50 && scroll <= $("#top-section").height()
    ) {
        $("#header-about").find(".text").css("top", "0");
    } else {
        $("#header-about").find(".text").css("top", "");
    }


    if (
        scroll > $("#top-section").height() && scroll <= $("#top-section").height() + $("#team").height()
    ) {
        $("#header-team .text").css("top", "0");
    } else {
        $("#header-team .text").css("top", "");
    }

})
