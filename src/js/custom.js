(function($) {
    "use strict";
    $(document).ready(function() {
        jQuery('nav#main-menu').meanmenu();
        $(".all-founder").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTablet: [767, 1],
            itemsMobile: [479, 1],
        });
        $(".all-product-thumb").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: false,
            items: 1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".all-related-product").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: false,
            margin: 10,
            items: 3,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        $(".all-testimonial").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        $(".all-team").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 4
                }
            }
        });
        $(".all-blog2-feature").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        $(".all-patner").owlCarousel({
            autoplay: true,
            pagination: false,
            nav: false,
            dots: true,
            items: 5,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
        $(".all-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
        $(".all-slide").on("translate.owl.carousel", function() {
            $(".slider-text *").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text *").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".all-slide").on("translated.owl.carousel", function() {
            $(".slider-text *").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text *").addClass("animated fadeInDown").css("opacity", "1");
        });

        $(".latest-slide").owlCarousel({
            items: 3,
            nav: true,
            dots: true,
            autoplay: false,
            margin: 10,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
        $("#price_id").slider({
            range: true,
            min: 0,
            max: 100,
            values: [5, 90],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#price_id").slider("values", 0) +
            " - $" + $("#price_id").slider("values", 1));
        $.scrollUp({
            scrollText: '<i class="fa fa-long-arrow-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        $(window).load(function() {
            $('#preloader').fadeOut();
            $('#preloader-status').delay(200).fadeOut('slow');
            $('body').delay(200).css({
                'overflow-x': 'hidden'
            });
        });
        $(".project-gallery").imagesLoaded(function() {
            $(".filtr-container").isotope({
                itemSelector: '.filtr-item',
                layoutMode: 'fitRows',
            });
            $("ul.simplefilter li").on("click", function() {
                $("ul.simplefilter li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".filtr-container").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    });
})(jQuery);