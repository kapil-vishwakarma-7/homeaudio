/*-----------------------------------------------------------------------
         Price Flip
    ----------------------------------------------------------------------- */
(function() {
    "use strict";

    //hide the subtle gradient layer (.owl-pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
    checkScrolling($('.owl-pricing-body'));
    $(window).on('resize', function() {
        window.requestAnimationFrame(function() {
            checkScrolling($('.owl-pricing-body'))
        });
    });
    $('.owl-pricing-body').on('scroll', function() {
        var selected = $(this);
        window.requestAnimationFrame(function() {
            checkScrolling(selected)
        });
    });

    function checkScrolling(tables) {
        tables.each(function() {
            var table = $(this),
                totalTableWidth = parseInt(table.children('.owl-pricing-features').width(), 10),
                tableViewport = parseInt(table.width(), 10);
            if (table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
                table.parent('li').addClass('is-ended');
            } else {
                table.parent('li').removeClass('is-ended');
            }
        });
    }
    //switch from monthly to annual pricing tables
    bouncy_filter($('.owl-pricing-container'));

    function bouncy_filter(container) {
        container.each(function() {
            var pricing_table = $(this);
            var filter_list_container = pricing_table.children('.owl-pricing-switcher'),
                filter_radios = filter_list_container.find('input[type="radio"]'),
                pricing_table_wrapper = pricing_table.find('.owl-pricing-wrapper');
            //store pricing table items
            var table_elements = {};
            filter_radios.each(function() {
                var filter_type = $(this).val();
                table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="' + filter_type + '"]');
            });
            //detect input change event
            filter_radios.on('change', function(event) {
                event.preventDefault();
                //detect which radio input item was checked
                var selected_filter = $(event.target).val();
                //give higher z-index to the pricing table items selected by the radio input
                show_selected_items(table_elements[selected_filter]);
                //rotate each owl-pricing-wrapper 
                //at the end of the animation hide the not-selected pricing tables and rotate back the .owl-pricing-wrapper
                if (!Modernizr.cssanimations) {
                    hide_not_selected_items(table_elements, selected_filter);
                    pricing_table_wrapper.removeClass('is-switched');
                } else {
                    pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                        hide_not_selected_items(table_elements, selected_filter);
                        pricing_table_wrapper.removeClass('is-switched');
                        //change rotation direction if .owl-pricing-list has the .owl-bounce-invert class
                        if (pricing_table.find('.owl-pricing-list').hasClass('owl-bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
                    });
                }
            });
        });
    }

    function show_selected_items(selected_elements) {
        selected_elements.addClass('is-selected');
    }

    function hide_not_selected_items(table_containers, filter) {
        $.each(table_containers, function(key, value) {
            if (key != filter) {
                $(this).removeClass('is-visible is-selected').addClass('is-hidden');
            } else {
                $(this).addClass('is-visible').removeClass('is-hidden is-selected');
            }
        });
    }



})();