

$(document).ready(function () {
    $('.preloader').fadeOut(1500);
})


$(document).ready(function () {
    $('#home').backstretch([
        "image/backslider-1.jpg",
        "image/backslider-2.jpg",
        "image/backslider-3.jpg",
    ], { duration: 4000 })
})


// smoothScroll
$(document).ready(function () {
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    $(function () {
        $('#home a, .navbar-default a').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
    new WOW({ mobile: false }).init();

    // magnificPopup

    $('.menu-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    })
    $('.imagelist-item a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    // isotope
    var $container = $('.isotope');
    var $imgs = $('.imagelist-item img');

    $container.imagesLoaded(function () {

        $container.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.imagelist-item'
        });


    });


    $('#imagelist a').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('selected')) {
            return;
        } else {

        }
        var filterValue = $(this).attr("data-filter");
        $container.isotope({
            filter: filterValue,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });

        var filters = $(this).closest('#filters');
        filters.find('.selected').removeClass('selected');
        $(this).addClass('selected');
    })
// 移动端触摸滑屏时间
    var startX, endX;//声明触摸的两个变量
    var offset = 30;//声明触摸距离的变量
    $('.carousel-inner').on('touchstart', function (e) {
        e.preventDefault();
        startX = e.originalEvent.touches[0].clientX;//当触摸开始时的x坐标；
    });
    $('.carousel-inner').on('touchmove', function (e) {
        endX = e.originalEvent.touches[0].clientX;//当触摸离开时的x坐标；
    });
    $('.carousel-inner').on('touchend', function (e) {
        //当触摸完成时进行的事件；
        var distance = Math.abs(startX - endX);//不论正负，取值为正值；
        if (distance > offset) {
            if (startX > endX) {
                $('#myCarousel').carousel('next');//当开始的坐标大于结束的坐标时，滑动到下一附图
            } else {
                $('#myCarousel').carousel('prev');//当开始的坐标小于结束的坐标时，滑动到上一附图

            }

        }
    });

    // navgation点击事件
    $('.navbar-nav li').on('click',function(){
        var navbar = $(this).closest('.navbar-nav');
        navbar.find('.active').removeClass('active');
        $(this).addClass('active');
    })

    $('.mobile-click').on('touchstart',function(){

    })
})




$(document).ready(function () {
    $('#sticky-nav').sticky({ zIndex: 10000 });
})



