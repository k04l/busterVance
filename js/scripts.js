$(function() {
    $(".carousel").carousel( { interval: 3000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function() {
    $(".galleryCarousel").carousel( { interval: 3000, pause: "false" } );
    $("#galleryCarouselButton").click(function(){
        if ($("#galleryCarouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#galleryCarouselButton").children("i").removeClass("fa-pause");
            $("#galleryCarouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#galleryCarouselButton").children("i").removeClass("fa-play");
            $("#galleryCarouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function() {
    $("#subscribeButton").click(function() {
        $("#subscribeModal").modal("show");
    });
});

$(function() {
    $("#navSubButton").click(function() {
        $("#subscribeModal").modal("show");
    });
});

$(function() {
    $("#navbarToggler").click(function() {
        if ($("#busterNavbar").hasClass("collapse")) {
            $("#busterNavbar").removeClass("collapse");
            $("#busterNavbar").addClass("show");
        } else {
            $("#busterNavbar").removeClass("show");
            $("#busterNavbar").addClass("collapse");
        }
    });
});

$(function() {
    $("#navGalBut").click(function() {
        $("#galleryModal").modal("show");
    });
});

$(function() {
    $("#presentGalleryButton").click(function() {
        $("#galleryModal").modal("show");
    });
});


