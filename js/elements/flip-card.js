/*-----------------------------------------------------------------------
         Flip Card
    ----------------------------------------------------------------------- */
	
(function() {
    "use strict";

    /*! flip */
    ! function(e) {
        var t = function(e) {
                e.data("fliped", !0);
                var t = "rotate" + e.data("axis");
                e.find(".flip-front").css({
                    transform: t + (e.data("reverse") ? "(-180deg)" : "(180deg)")
                }), e.find(".flip-back").css({
                    transform: t + "(0deg)"
                })
            },
            i = function(e) {
                e.data("fliped", !1);
                var t = "rotate" + e.data("axis");
                e.find(".flip-front").css({
                    transform: t + "(0deg)"
                }), e.find(".flip-back").css({
                    transform: t + (e.data("reverse") ? "(180deg)" : "(-180deg)")
                })
            };
        e.fn.flip = function(a) {
            return this.each(function() {
                var r = e(this);
                if (void 0 !== a && "boolean" == typeof a) a ? t(r) : i(r);
                else {
                    var s = e.extend({
                        axis: "y",
                        reverse: !1,
                        trigger: "click",
                        speed: 500
                    }, a);
                    if (r.data("reverse", s.reverse), r.data("axis", s.axis), "x" == s.axis.toLowerCase()) var o = 2 * r.outerHeight(),
                        n = "rotatex";
                    else var o = 2 * r.outerWidth(),
                        n = "rotatey";
                    r.find(".flip-back").css({
                        transform: n + "(" + (s.reverse ? "180deg" : "-180deg") + ")"
                    }), r.css({
                        perspective: o,
                        position: "relative"
                    });
                    var f = s.speed / 1e3 || .5;
                    if (r.find(".flip-front, .flip-back").outerHeight(r.height()).outerWidth(r.width()).css({
                            "transform-style": "preserve-3d",
                            position: "absolute",
                            transition: "all " + f + "s ease-out",
                            "backface-visibility": "hidden"
                        }), "click" == s.trigger.toLowerCase()) r.find('button, a, input[type="submit"]').on(function(e) {
                        e.stopPropagation()
                    }), r.on(function() {
                        r.data("fliped") ? i(r) : t(r)
                    });
                    else if ("hover" == s.trigger.toLowerCase()) {
                        var d = function() {
                                r.unbind("mouseleave", c), t(r), setTimeout(function() {
                                    r.on("mouseleave", c), r.is(":hover") || i(r)
                                }, s.speed + 150)
                            },
                            c = function() {
                                i(r)
                            };
                        r.mouseenter(d), r.mouseleave(c)
                    }
                }
            }), this
        }
    }(jQuery);
    // Flip Card
    $(".flip-card").flip({
        trigger: "hover"
    });

})();