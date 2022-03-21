$(document).ready(function () {
  // Mobile Nav
  $("#mobile-btn").click(function () {
    $("#mobile-header").fadeIn("slow").removeClass("hidden");
  });
  $("#mobile-close").click(function () {
    $("#mobile-header").fadeOut("slow").addClass("hidden");
  });
  //Hero Carousel
  $("#carausel-1-columns-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  //Showcase Carousel
  $("#carausel-2-columns-1").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //Partners Carousel
  $("#carausel-3-columns-5").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Accordian
  $("#accordian").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $("#accordian > svg").removeClass("transform rotate-180");
    } else {
      $("#accordian > svg").addClass("transform rotate-180");
      $("#accordian").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });

  // Scroll To Top
  var scrollTop = $("#scrollUp");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
      $(scrollTop).css("visibility", "initial");
    } else {
      $(scrollTop).css("opacity", "0");
      $(scrollTop).css("visibility", "hidden");
    }
  });
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
