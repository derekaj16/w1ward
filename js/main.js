(function($) {
    $(document).ready(function() {
        $('#bee').css({'margin-top': '+=25px', 'opacity': '0'});
        $('.beehive-container').css({'margin-top': '+=25px', 'opacity': '0'});
        $('header').css({'left': '-100%'});
        $('.header-text').css({'opacity': '0', 'margin-top': '+=25px'});
        $('.content').css({'margin-top': '+=25px', 'opacity': '0'})

        setTimeout(function() {
            $('header').animate({'left': '0'}, 500);
        }, 250)
        setTimeout(function() {
            $('.header-text').animate({
                opacity: 1,
                'margin-top': '-=25px'
            }, 500);
        }, 750)
        setTimeout(function() {
            $('#bee').fadeIn(1000).animate({
                opacity: 1,
                'margin-top': '-=25px'
              }, 500);
        }, 1000);
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
        
    });
})(jQuery);