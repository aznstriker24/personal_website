! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
(function(e, t) {
    var n = e.jQuery || e.Cowboy || (e.Cowboy = {}),
        r;
    n.throttle = r = function(e, r, i, s) {
        function a() {
            function p() {
                u = +(new Date);
                i.apply(n, l)
            }

            function v() {
                o = t
            }
            var n = this,
                a = +(new Date) - u,
                l = arguments;
            if (s && !o) {
                p()
            }
            o && clearTimeout(o);
            if (s === t && a > e) {
                p()
            } else {
                if (r !== true) {
                    o = setTimeout(s ? v : p, s === t ? e - a : e)
                }
            }
        }
        var o, u = 0;
        if (typeof r !== "boolean") {
            s = i;
            i = r;
            r = t
        }
        if (n.guid) {
            a.guid = i.guid = i.guid || n.guid++
        }
        return a
    };
    n.debounce = function(e, n, i) {
        return i === t ? r(e, n, false) : r(e, i, n !== false)
    }
})(this)
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function(e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
})
$(function() {
    function n(e) {
        page = $(".js-page");
        if (e == "down") {
            currentPage++;
            $(".js-current-page").text(currentPage + 1);
            currentHash = "#" + page.eq(currentPage).attr("id");
            i(currentPage);
            $("html, body").animate({
                scrollTop: $(currentHash).offset().top
            }, 1e3, "easeInOutCubic")
        } else if (e == "up") {
            currentPage--;
            $(".js-current-page").text(currentPage + 1);
            currentHash = "#" + page.eq(currentPage).attr("id");
            i(currentPage);
            $("html, body").animate({
                scrollTop: $(currentHash).offset().top
            }, 1e3, "easeInOutCubic")
        }
    }

    function r(e) {
        currentPage = e;
        $(".js-current-page").text(currentPage + 1)
    }

    function i(e) {
        if (e + 1 == 1) {
            $(".js-nav a, .js-logo, .js-counter").removeClass("as-darken")
        } else if (e + 1 >= 2) {
            $(".js-nav a, .js-logo, .js-counter").addClass("as-darken")
        }
    }

    function s() {
        if ($(window).width() > 1024) {
            isScrollbar = false
        } else {
            isScrollbar = true
        }
    }
    maxPage = $(".js-page").length;
    currentPage = 0;
    isScrollbar = false;
    itemHeight = 0;
    $(".js-max-page").text(maxPage);
    $(".js-current-page").text(currentPage + 1);
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
        $("body").addClass("is-mobile")
    }
    var e = navigator.userAgent;
    var t = e.indexOf("Mozilla/5.0") > -1 && e.indexOf("Android ") > -1 && e.indexOf("AppleWebKit") > -1 && !(e.indexOf("Chrome") > -1);
    if (t) $("body").addClass("is-android");
    $(window).load(function() {
        setTimeout(function() {
            $("body").addClass("loaded")
        }, 400);
        $("html, body").animate({
            scrollTop: 0
        }, 0)
    });
    $(window).on("resize load", function() {
        itemHeight = $(".slider img").height();
        $(".slider").css("height", itemHeight);
        windowHeight = $(window).height()
    });
    $(document).keydown(function(e) {
        if (!isScrollbar) {
            switch (e.which) {
                case 38:
                    if (currentPage == 0) return false;
                    n("up");
                    break;
                case 40:
                    if (currentPage == maxPage - 1) return false;
                    n("down");
                    break;
                case 32:
                    return false;
                    break
            }
        } else {
            return false
        }
    });
    $(document).bind("mousewheel", $.debounce(200, true, function(e, t, r, i) {
        if (!isScrollbar) {
            if (i < 0) {
                if (currentPage == maxPage - 1) return false;
                n("down")
            } else {
                if (currentPage == 0) return false;
                n("up")
            }
        }
    }));
    $(".js-navitem").click(function(e) {
        e.preventDefault();
        isScrollbar = true;
        $(".js-logo").addClass("as-inverted")
    });
    $(".js-logo, .js-up").click(function(e) {
        r(0);
        i(0)
    });
    $(".js-down").click(function(e) {
        e.preventDefault();
        n("down")
    });
    $(".js-show-projects").click(function(e) {
        e.preventDefault();
        $(".js-mdl-projects").addClass("as-show");
        $(".js-projects-nav").addClass("as-show")
    });
    $(".js-show-about").click(function(e) {
        e.preventDefault();
        $(".js-mdl-about").addClass("as-show")
    });
    $(".js-show-contact").click(function(e) {
        e.preventDefault();
        $(".js-mdl-contact").addClass("as-show")
    });
    $(".js-projects-nav a").click(function(e) {
        e.preventDefault();
        target = $(this).attr("href");
        currentPage = parseInt($(this).attr("data-index"));
        r(currentPage);
        i(currentPage);
        s();
        $(".js-projects-nav").removeClass("as-show");
        setTimeout(function() {
            $(".js-mdl").removeClass("as-show");
            $(".js-logo").removeClass("as-inverted")
        }, 400)
    });
    currentItem = 0;
    maxItem = $(".slider li").length;
    $(".slider li").eq(0).addClass("as-active");
    setInterval(function() {
        currentItem++;
        if (currentItem == maxItem) currentItem = 0;
        $(".slider li").removeClass("as-active");
        $(".slider li").eq(currentItem).addClass("as-active")
    }, 6e3);
    $(".js-mdl-close").click(function(e) {
        e.preventDefault();
        s();
        $(".js-projects-nav").removeClass("as-show");
        setTimeout(function() {
            $(".js-mdl").removeClass("as-show");
            $(".js-logo").removeClass("as-inverted")
        }, 400)
    });
    $("[data-target]").click(function(e) {
        e.preventDefault();
        var t = $(this).attr("data-target");
        $("html, body").animate({
            scrollTop: $(t).offset().top
        }, 0)
    });
    $(".mail").each(function() {
        var e = $(this).attr("rel").replace(" [A] ", "@").replace(" [DE]", ".de");
        $(this).attr("href", "mailto:" + e);
        $(this).text(e)
    })
})
