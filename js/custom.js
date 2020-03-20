
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active-nav")) {
            $(".item").removeClass("active-nav");
            $(".toggle").html("<i class='fa fa-bars'></i>");
        } else {
            $(".item").addClass("active-nav");
            $(".toggle").html("<i class='fa fa-times'></i>");
        }
    });
});