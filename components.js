function navigate(link, section) {
    $(link).click(function () {
        $('html, body').animate({
            scrollTop: $(section).offset().top
        });
        window.location.hash = section;
    });
}


$(document).ready(function () {

    // $('section#landing').load('components/landing.html');
    $('section#info').load('components/info.html');
    $('section#give').load('components/give.html');
    $('section#subscribe').load('components/subscribe.html');

    // navigate('a#landing', 'section#landing');
    navigate('a#info', 'section#info');
    navigate('a#give', 'section#give');
    navigate('a#subscribe', 'section#subscribe');


    if ($body.hasClass('at-info')) {
        // let $activeNavLink = $('a#landing');
        $('nav a').css('font-weight', '300');
        // $('a').not($('a#landing')).css('font-weight', 500);
    }

});
