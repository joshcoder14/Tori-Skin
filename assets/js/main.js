jQuery(document).ready(function () {
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop < 100 || scrollTop < lastScrollTop) {
            // Scrolling up toward top
            $("#header").addClass("sticky");

            if (scrollTop < 100) {
                $("#header").addClass("no-bg");
            } else {
                $("#header").removeClass("no-bg");
            }

        } else {
            // Scrolling down
            $("#header").removeClass("sticky no-bg");
        }

        lastScrollTop = scrollTop;
    });

    $("#header").addClass("sticky");

    // Header active
    $('#navbar .nav-link').on('click', function (e) {
        e.preventDefault();
        $('#navbar .nav-link').removeClass('active'); 
        $(this).addClass('active');
        $('#navbar').toggleClass('open');
        $('#menu-bar').toggleClass('active');
    });

    // Mobile Menu
    $('#menu-bar').on('click', function () {
        $('#navbar').toggleClass('open');
        $(this).toggleClass('active');
    });

    // Lazy Load
    $('img').attr('loading', 'lazy');

    // AOS Animation
    window.addEventListener('load', () => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
    });

    // Preloader
    $(window).on('load', function () {
        $('#preloader').delay(1000).fadeOut('slow');
    });

    // Back to Top
    let backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);
    }

});
