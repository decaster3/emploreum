window.midleTopSection = function () {

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
      var koef = 30;

      $.each($(".circle"), function (i, obj) {

          $(obj).height($(obj).width());

          $(obj).css({
              "top": $("#technology #circle-orbit-container").height() / (i + 2 ) - $(this).height() / 2,
              "left": $("#technology #circle-orbit-container").width() / 2 - $(this).width() / 2
          });
      });

      $("header .block").on("click", function () {
          var selector = $(this).attr("data-target");
          var offset = $(selector).eq(0).offset().top - 50;
          $('html, body').animate({scrollTop : offset},800);
      });

};

$(window).on("resize", function () {
    window.midleTopSection();
});

$(window).on("scroll", function () {

    var scroll = $(document).scrollTop();

    $('.box').waypoint(function (dir) {
        var animation = $(this).attr("data-target");
        if (dir === 'down' && !$(this).hasClass(animation)) {
            $(this).addClass(animation);
        }
    }, {
        offset: '80%'
    })

});
