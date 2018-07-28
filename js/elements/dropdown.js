/*-----------------------------------------------------------------------
         DropDown
    ----------------------------------------------------------------------- */

(function() {
    "use strict";

    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function() {
            var obj = this;
            obj.dd.on('click', function(event) {
                $(this).toggleClass('active');
                event.stopPropagation();
            });
        }
    };
    var dd = new DropDown($('.wrapper-dropdown'));
    $(document).on(function() {
        // all dropdowns
        $('.wrapper-dropdown').removeClass('active');
    });

})();