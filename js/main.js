(function($) {
    $(document).ready(function() {
        $('.list-container').css({'left': '-100%'});
        $('.content').css({'margin-top': '+=25px', 'opacity': '0'});

        if (sessionStorage.getItem('animated') === 'true') {
            $('.content').fadeIn(1000).animate({
                opacity: 1,
                'margin-top': '-=25px'
            }, 500);
        }
        else {
            console.log('else statement');
            sessionStorage.setItem('animated', 'true');
            $('#bee').css({'margin-top': '+=25px', 'opacity': '0'});
            $('.beehive-container').css({'margin-top': '+=25px', 'opacity': '0'});
            $('header').css({'left': '-100%'});
            $('.header-text').css({'opacity': '0', 'margin-top': '+=25px'});
    
            setTimeout(function() {
                $('header').animate({'left': '0'}, 500);
            }, 750);
            setTimeout(function() {
                $('.header-text').animate({
                    opacity: 1,
                    'margin-top': '-=25px'
                }, 500);
            }, 1250)
            setTimeout(function() {
                $('#bee').fadeIn(1000).animate({
                    opacity: 1,
                    'margin-top': '-=25px'
                  }, 500);
            }, 250);
            setTimeout(function() {
                $('.beehive-container.first').fadeIn(1000).animate({
                    opacity: 1,
                    'margin-top': '-=25px'
                }, 500);
            }, 1250);
            setTimeout(function() {
                $('.beehive-container.second').fadeIn(1000).animate({
                    opacity: 1,
                    'margin-top': '-=25px'
                }, 500);
            }, 1500);
            setTimeout(function() {
                $('.content').fadeIn(1000).animate({
                    opacity: 1,
                    'margin-top': '-=25px'
                }, 500);
            }, 1750);
        }
    });
    $('.list-icon').on('click', function() {
        $('.list-container').animate({'left': '0%'}, 400);
        $('.shadow').fadeIn('fast');
    });
    $('.shadow').on('click', function() {
        $('.shadow').fadeOut('fast');
        $('.list-container').animate({'left': '-100%'}, 500);
    });
    $('.exit').on('click', function() {
        $('.shadow').fadeOut('fast');
        $('.list-container').animate({'left': '-100%'}, 500);
    });

})(jQuery);