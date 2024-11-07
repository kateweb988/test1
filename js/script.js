document.addEventListener("DOMContentLoaded", () => {
    $('.objects__length2 span').text($('.object2').length);
    var objectsSliders = $('.objects__slides2').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 20,
        items: 2,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            700: {
                items: 2
            }
        }
    });
    objectsSliders.on('changed.owl.carousel', function (event) {
        setTimeout(function () {
            $('.objects__length2 i').text($('.objects__slider2 .owl-item.active .object2').data('index'));
        }, 200);
    });

    $('.objects__next2').click(function () {
        objectsSliders.trigger('next.owl.carousel');
    });

    $('.objects__prev2').click(function () {
        objectsSliders.trigger('prev.owl.carousel');
    });
});

$(document).ready(function () {
    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        var self = this;

        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');

        $('.overlay').fadeIn(300,
            function () {
                $($(self).data('href'))
                    .css('display', 'block')
                    .stop().animate({ opacity: 1, top: 0 }, 200);

            });
        return false;
    });

    function popupClose() {
        $('.popup')
            .stop().animate({ opacity: 0, top: -100 }, 300,
                function () {
                    $('.page-wrap').css('overflow', 'hidden');
                    $('html').css('overflow', 'auto');
                    $(this).css('display', 'none');
                    $('.overlay').stop().fadeOut(400);
                }
            );
    }

    $('.popup').on('click', function (e) {
        e.stopPropagation();
    });

    $('.popup__close, .overlay').on('click', popupClose);
    $('body').keyup(function (e) {
        if (e.keyCode == 27) {
            popupClose();
        }
    });

    function windowResize() {
        if ($(window).width() > 767) {
            $('.objects__length span').text($('.object').length);

            var objectsSliders = $('.objects__slides').owlCarousel({
                smartSpeed: 800,
                loop: true,
                margin: 20,
                items: 1,
                dots: false
            });

            objectsSliders.on('changed.owl.carousel', function (event) {
                setTimeout(function () {
                    $('.objects__length i').text($('.objects__slider .owl-item.active .object').data('index'));
                }, 200);
            });

            $('.objects__next').click(function () {
                objectsSliders.trigger('next.owl.carousel');
            });

            $('.objects__prev').click(function () {
                objectsSliders.trigger('prev.owl.carousel');
            });

        } else {
            $('.objects__slides').owlCarousel('destroy').removeClass('owl-carousel');
        }

    }
    $(window).resize(function () {
        windowResize();
    });

    windowResize();



    $('.select').on('click', function () {
        $(this).toggleClass('open');
    });

    $('.select__list-item').on('click', function () {
        $(this).parents('.select').find('.form__field').val($(this).text());
    });

    $('.menu-btn').on('click', function () {
        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');
        $('.menu').addClass('open');
    });

    $('.menu__close').on('click', function () {
        $('.page-wrap').css('overflow', 'hidden');
        $('html').css('overflow', 'auto');
        $('.menu').removeClass('open');
    });

});

