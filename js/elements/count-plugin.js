/*-----------------------------------------------------------------------
         jQuery CounTo plugin
  ----------------------------------------------------------------------- */
  
(function() {
    "use strict";

    (function(a) {
        a.fn.countTo = function(g) {
            g = g || {};
            return a(this).each(function() {
                function e(a) {
                    a = b.formatter.call(h, a, b);
                    f.html(a)
                }
                var b = a.extend({}, a.fn.countTo.defaults, {
                        from: a(this).data("from"),
                        to: a(this).data("to"),
                        speed: a(this).data("speed"),
                        refreshInterval: a(this).data("refresh-interval"),
                        decimals: a(this).data("decimals")
                    }, g),
                    j = Math.ceil(b.speed / b.refreshInterval),
                    l = (b.to - b.from) / j,
                    h = this,
                    f = a(this),
                    k = 0,
                    c = b.from,
                    d = f.data("countTo") || {};
                f.data("countTo", d);
                d.interval && clearInterval(d.interval);
                d.interval =
                    setInterval(function() {
                        c += l;
                        k++;
                        e(c);
                        "function" == typeof b.onUpdate && b.onUpdate.call(h, c);
                        k >= j && (f.removeData("countTo"), clearInterval(d.interval), c = b.to, "function" == typeof b.onComplete && b.onComplete.call(h, c))
                    }, b.refreshInterval);
                e(c)
            })
        };
        a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1E3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, e) {
                return a.toFixed(e.decimals)
            },
            onUpdate: null,
            onComplete: null
        }
    })(jQuery);

    // display counter
    $('.counters-box').waypoint(function() {
        $(this).find('.display-counter').each(
            function() {
                var value = $(this).data('value');
                $(this).countTo({
                    from: 0,
                    to: value,
                    speed: 3000,
                    refreshInterval: 10
                });
            });
        setTimeout(function() {
            $.waypoints('refresh');
        }, 1000);
    }, {
        triggerOnce: true,
        offset: '100%'
    });

})();