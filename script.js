// background color change
function changeBgColor(frame) {
  if ($(document).scrollTop() >= $(frame).position().top) {
    $('body').css('background', $(frame).data('color'));
  }
}

function scrollOnClick(content) {
    $('html, body').animate({
      scrollTop: $(content).position().top
    }, 200);
}


$(document).on('scroll', function () {
  changeBgColor('.f1');
  changeBgColor('.f2');
  changeBgColor('.f3');
  changeBgColor('.f4');
  changeBgColor('.f5');
  if ($(document).scrollTop() >= $('.f5').position().top) {
    $('.arrowButton').css('transform', 'rotate(180deg)');
  } else {
    $('.arrowButton').css('transform', 'rotate(0deg)');
  }
});

$(document).ready(function () {
  $('.overlay').fadeOut();

  // scroll when clicking on arrow

  $('.arrowButton').click(function () {
    if ($(document).scrollTop() < $('.f2').position().top) {
      scrollOnClick('.c2');
    } else if ($(document).scrollTop() < $('.f3').position().top) {
      scrollOnClick('.c3');
    } else if ($(document).scrollTop() < $('.f4').position().top) {
      scrollOnClick('.c4');
    } else if ($(document).scrollTop() < $('.f5').position().top) {
      scrollOnClick('.c5');
    } else {
      $('html, body').animate({
        scrollTop: 0
      }, 200);
    }

  });
});

// scroll back to top on reload
$(window).on('beforeunload', function () {
  $('.overlay').show();
  $(this).scrollTop(0);
});