$(function() {
    $('#menu-toggle').click(function() {
        if ($('#header').toggleClass('menu__active').hasClass('menu__active')) {
            
            $(window).on('resize.myMenu', onWindowResizeHandler);
            $(document.body).css('overflow', 'hidden');

            $('#menu').find('li').get().forEach(function(li, i) {
                $(li).css('transition-delay', i * 0.03 + 's');
            });

            function onWindowResizeHandler() {
                $('#header').css('height', $(window).height());
            }
            onWindowResizeHandler();

        } else {

            $('#menu').find('li').get().reverse().forEach(function(li, i) {
                $(li).css('transition-delay', i * 0.03 + 's');
            });

            $(window).off('resize.myMenu');
            $(document.body).css('overflow', '');
            $('#header').css('height', '');

        }
    });
});
