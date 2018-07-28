/*-----------------------------------------------------------------------
         select and dropdown
    ----------------------------------------------------------------------- */

$(document).ready(function() {

  $(".radio-owl-holder").each(function() {
        $(this).children().hide();
        var a = $(this).children("label").html();
        $(this).append('<span class="desc">' + a + "</span>"), $(this).prepend('<span class="tick"></span>'), $(this).click(function() {
            $(this).children("input").prop("checked", !0), $(this).children("input").trigger("change")
        })
    }), $("input[type=radio]").change(function() {
        $("input[type=radio]").each(function() {
            1 == $(this).prop("checked") ? $(this).parent().addClass("activeradio-owl-holder") : $(this).parent().removeClass("activeradio-owl-holder")
        })
    }), $("input[type=radio]").change(), $(".select-owl-holder").each(function() {
        $(this).children().hide();
        var a = $(this).children("label").text();
        $(this).append('<span class="desc">' + a + "</span>"), $(this).append('<span class="pulldown"></span>'), $(this).append('<div class="select-owl-dropdown"></div>'), $(this).children("select").children("option").each(function() {
            if ("0" != $(this).attr("value")) {
                $drop = $(this).parent().siblings(".select-owl-dropdown");
                var a = $(this).attr("value");
                $drop.append("<span>" + a + "</span>")
            }
        }), $(this).click(function() {
            $(this).hasClass("activeselect-owl-holder") ? ($(this).children(".select-owl-dropdown").slideUp(200), $(this).removeClass("activeselect-owl-holder"), "0" != $(this).children("select").val() && $(this).children(".desc").fadeOut(100, function() {
                $(this).text($(this).siblings("select").val()), $(this).fadeIn(100)
            })) : ($(".activeselect-owl-holder").each(function() {
                $(this).children(".select-owl-dropdown").slideUp(200), "0" != $(this).children("select").val() && $(this).children(".desc").fadeOut(100, function() {
                    $(this).text($(this).siblings("select").val()), $(this).fadeIn(100)
                }), $(this).removeClass("activeselect-owl-holder")
            }), $(this).children(".select-owl-dropdown").slideDown(200), $(this).addClass("activeselect-owl-holder"), "0" != $(this).children("select").val() && $(this).children(".desc").fadeOut(100, function() {
                $(this).text($(this).siblings("select").children("option[value=0]").text()), $(this).fadeIn(100)
            }))
        })
    }), $(".select-owl-holder .select-owl-dropdown span").click(function() {
        $(this).siblings().removeClass("active"), $(this).addClass("active");
        var a = $(this).text();
        $(this).parent().siblings("select").val(a), $(this).parent().siblings(".desc").fadeOut(100, function() {
            $(this).text(a), $(this).fadeIn(100)
        })
    })

});