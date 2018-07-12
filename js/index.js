

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



})




$(document).ready(function () {
    $('#sticky-nav').sticky({ zIndex: 100 });
})



