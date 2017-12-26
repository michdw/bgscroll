// background color change
function changeBgColor(frame) {
  if ($(document).scrollTop() >= $(frame).position().top) {
    $('body').css('background', $(frame).data('color'));
  }
}

$(document).on('scroll', function() {
  changeBgColor('#f1');
  changeBgColor('#f2');
  changeBgColor('#f3');
  changeBgColor('#f4');
  changeBgColor('#f5');
  if ($(document).scrollTop() >= $('#f5').position().top) {
    $('#tonext').css('transform', 'rotate(180deg)');
  }
  if ($(document).scrollTop() < $('#f5').position().top) {
    $('#tonext').css('transform', 'rotate(0deg)');
  }
});

$(document).ready(function() {
  $('#overlay').fadeOut();

  // scroll when clicking on arrow

  $('#tonext').click(function() {
    if ($(document).scrollTop() < $('#f2').position().top) {
      $('html, body').animate({
          scrollTop: $('#c2').position().top
        }, 200 );
    } else if ($(document).scrollTop() < $('#f3').position().top) {
      $('html, body').animate({
          scrollTop: $('#c3').position().top
        }, 200 );
    } else if ($(document).scrollTop() < $('#f4').position().top) {
      $('html, body').animate({
          scrollTop: $('#c4').position().top
        }, 200 );
    } else if ($(document).scrollTop() < $('#f5').position().top) {
      $('html, body').animate({
          scrollTop: $('#c5').position().top
        }, 200 );
    } else {
      $('html, body').animate({
          scrollTop: 0
        }, 200 );
    }

  });
});

// scroll back to top on reload
$(window).on('beforeunload', function() {
  $('#overlay').show();
  $(this).scrollTop(0);
});
