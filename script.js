// background color change
function changeBgImage(frame) {
  if ($(document).scrollTop() >= $(frame).position().top) {
    let n = $(frame).data("bg");
    $(".u" + n).fadeIn(500);
  }
  if ($(document).scrollTop() < $(frame).position().top) {
    let n = $(frame).data("bg");
    $(".u" + n).fadeOut(500);
  }
}

function scrollOnClick(content) {
  $("html, body").animate(
    {
      scrollTop: $(content).position().top,
    },
    200
  );
}

$(document).on("scroll", function () {
  changeBgImage(".f1");
  changeBgImage(".f2");
  changeBgImage(".f3");
  changeBgImage(".f4");
  changeBgImage(".f5");
  if ($(document).scrollTop() >= $(".f5").position().top) {
    $(".arrowButton").css("transform", "rotate(180deg)");
  } else {
    $(".arrowButton").css("transform", "rotate(0deg)");
  }
});

$(document).ready(function () {
  $(".overlay").fadeOut();
  $(".underlay").not(".u1").hide();

  // scroll when clicking on arrow

  $(".arrowButton").click(function () {
    if ($(document).scrollTop() < $(".f2").position().top) {
      scrollOnClick(".c2");
    } else if ($(document).scrollTop() < $(".f3").position().top) {
      scrollOnClick(".c3");
    } else if ($(document).scrollTop() < $(".f4").position().top) {
      scrollOnClick(".c4");
    } else if ($(document).scrollTop() < $(".f5").position().top) {
      scrollOnClick(".c5");
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        200
      );
    }
  });
});

// scroll back to top on reload
$(window).on("beforeunload", function () {
  $(".overlay").show();
  $(this).scrollTop(0);
});
