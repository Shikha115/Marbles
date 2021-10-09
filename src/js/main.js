$(() => {
    $(document).scroll(() => {
        var scroll = $(this).scrollTop();
        $('.custom').toggleClass('onscroll', scroll > 100);
    });
});

$(document).ready(function() {
    var owl = $('.product-carousel.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        dots: false
    });
});

$(document).ready(function() {
    var owl = $('.client-carousel.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: false
    });
});

$(document).ready(function() {
    var owl = $('.banner-carousel.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        dots: true
    });
});

$(function() {
    $('.slide-one-item').owlCarousel({
        center: false,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 2000,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        nav: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
});

$(function() {
    $('.owl-1').owlCarousel({
        // animateOut: 'slideOutRight',
        // animateIn: 'slideInLeft',
        items: 1,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        dots: false,
        stagePadding: 0,
        smartSpeed: 450,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });
});

// testimonial

$(document).ready(function() {
    $(".testimonial .indicators li").click(function() {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
    });
    $(".testimonial .tabs li").click(function() {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
    });
});
$(document).ready(function() {
    $(".slider .swiper-pagination span").each(function(i) {
        $(this).text(i + 1).prepend("0");
    });
});

// modal

$(document).ready(function() {
    // Gets the video src from the data-src on each button

    var $videoSrc;
    $(".video-btn").click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function(e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
            "src",
            $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
        );
    });

    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function(e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
    });

    // document ready
});