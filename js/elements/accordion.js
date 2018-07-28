/*-----------------------------------------------------------------------
         Accordion
    ----------------------------------------------------------------------- */
(function() {
    "use strict";

    /* -- 1 -- */
    $(".f-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    /* -- 2 -- */
    $(".notaccordion").addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find("h3").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function() {
        $(this).toggleClass("ui-state-hover");
    }).prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>').click(function() {
        $(this).find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end().next().toggleClass("ui-accordion-content-active").slideToggle();
        return false;
    }).next().addClass("ui-accordion-content  ui-helper-reset ui-widget-content ui-corner-bottom").hide();


    /* -- Accordion -- */
    $('.owl-cssmenu li.has-sub>a').on('click', function() {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

})();