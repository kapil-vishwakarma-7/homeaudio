/*-----------------------------------------------------------------------
       Animated DIV
    ----------------------------------------------------------------------- */
(function() {
    "use strict";

    function css3animationEffect() {
        $().waypoint && Modernizr.mq("only all and (min-width: 320px)") && $(".animated").waypoint(function() {
            var i = $(this).data("animation-type");
            ("undefined" == typeof i || 0 == i) && (i = "fadeIn"), $(this).addClass(i);
            var t = $(this).data("animation-duration");
            ("undefined" == typeof t || 0 == t) && (t = "1"), $(this).css("animation-duration", t + "s");
            var n = $(this).data("animation-delay");
            "undefined" != typeof n && 0 != n && $(this).css("animation-delay", n + "s"), $(this).css("opacity", "1"), setTimeout(function() {
                $.waypoints("refresh")
            }, 1e3)
        }, {
            triggerOnce: !0,
            offset: "bottom-in-view"
        })
    }
    css3animationEffect();

})();