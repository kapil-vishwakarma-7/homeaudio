
/*-----------------------------------------------------------------------
         Side Navigation & Owl Search
    ----------------------------------------------------------------------- */

(function() {
    "use strict";

/*-----------------------
  --- Side Navigation ---
  ----------------------- */

    /*------------------------ open MENU ------------------------*/
    var $lateral_menu_trigger = $('#owl-menu-trigger, .side-nav-close'),
        $content_wrapper = $('.page-wrapper'),
        $navigation = $('');
    $lateral_menu_trigger.on('click', function(event) {
        event.preventDefault();
        $lateral_menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('lateral-menu-is-open');
        $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function() {
                $('html').toggleClass('');
            });
        $('.owl-lateral-nav').toggleClass('lateral-menu-is-open');
        if ($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('');
        }
    });

    /* close MENU */
    $content_wrapper.on('click', function(event) {
        if (!$(event.target).is('#owl-menu-trigger, .side-nav-close, #owl-menu-trigger span')) {
            $lateral_menu_trigger.removeClass('is-clicked');
            $navigation.removeClass('lateral-menu-is-open');
            $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function() {
                    $('html').removeClass('');
                });
            $('.owl-lateral-nav').removeClass('lateral-menu-is-open');
            if ($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('');
            }
        }
    });


    /*------------------------ open CART ------------------------*/

    var $lateral_cart_trigger = $('#owl-menu-cart, .side-cart-close'),
        $content_cart_wrapper = $('.page-wrapper'),
        $navigation_cart = $('');
    $lateral_cart_trigger.on('click', function(event) {
        event.preventDefault();
        $lateral_cart_trigger.toggleClass('is-clicked-cart');
        $navigation_cart.toggleClass('lateral-cart-is-open');
        $content_cart_wrapper.toggleClass('lateral-cart-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function() {
                $('html').toggleClass('');
            });
        $('.owl-lateral-cart').toggleClass('lateral-cart-is-open');
        if ($('html').hasClass('no-csstransitions')) {
            $('body').toggleClass('');
        }
    });
    /* close CART */
    $content_cart_wrapper.on('click', function(event) {
        if (!$(event.target).is('#owl-menu-cart, .side-cart-close, #owl-menu-cart span')) {
            $lateral_cart_trigger.removeClass('is-clicked-cart');
            $navigation_cart.removeClass('lateral-cart-is-open');
            $content_cart_wrapper.removeClass('lateral-cart-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function() {
                    $('html').removeClass('');
                });
            $('.owl-lateral-cart').removeClass('lateral-cart-is-open');
            //check if transitions are not supported
            if ($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('');
            }
        }
    });


    //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
    $('.item-has-children').children('a').on('click',
        function(event) {
            event.preventDefault();
            $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end()
                .parent('.item-has-children').siblings('.item-has-children').children('a')
                .removeClass('submenu-open').next('.sub-menu').slideUp(200);
        });



/*------------------------
  ------ Owl Search ------
  ------------------------ */

    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var MqL = 1170;
    //move nav element position according to window width
    moveNavigation();
    $(window).on('resize', function() {
        (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
    });
    //open search form
    $('.owl-search-trigger').on('click', function(event) {
        event.preventDefault();
        toggleSearch();
        closeNav();
    });
    //close lateral menu on mobile 
    $('.owl-search-overlay').on('swiperight', function() {
        if ($('.owl-primary-nav').hasClass('nav-is-visible')) {
            closeNav();
            $('.owl-search-overlay').removeClass('is-visible');
        }
    });
    $('.owl-search-overlay').on('click', function() {
        closeNav();
        toggleSearch('close')
        $('.owl-search-overlay').removeClass('is-visible');
    });
    //submenu items - go back link
    $('.go-back').on('click', function() {
        $(this).parent('.owl-header-buttons').addClass('is-hidden').parent('.has-children').parent('.owl-header-buttons').removeClass('moves-out');
    });

    function closeNav() {
        $('.owl-nav-trigger').removeClass('nav-is-visible');
        $('.owl-primary-nav').removeClass('nav-is-visible');
    }

    function toggleSearch(type) {
        if (type == "close") {
            //close serach 
            $('.owl-search').removeClass('is-visible');
            $('.owl-search-trigger').removeClass('search-is-visible');
            $('.owl-search-overlay').removeClass('search-is-visible');
        } else {
            //toggle search visibility
            $('.owl-search').toggleClass('is-visible');
            $('.owl-search-trigger').toggleClass('search-is-visible');
            $('.owl-search-overlay').toggleClass('search-is-visible');
            if ($(window).width() > MqL && $('.owl-search').hasClass('is-visible')) $('.owl-search').find('input[type="search"]').focus();
            ($('.owl-search').hasClass('is-visible')) ? $('.owl-search-overlay').addClass('is-visible'): $('.owl-search-overlay').removeClass('is-visible');
        }
    }

    function checkWindowWidth() {
        //check window width (scrollbar included)
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if (e[a + 'Width'] >= MqL) {
            return true;
        } else {
            return false;
        }
    }

    function moveNavigation() {
        var navigation = $('.owl-nav');
        var desktop = checkWindowWidth();
        if (desktop) {
            navigation.detach();
            navigation.insertBefore('.owl-header-buttons');
        } else {
            navigation.detach();
            navigation.insertAfter('.owl-main-content');
        }
    }

})();