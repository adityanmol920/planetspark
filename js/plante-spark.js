$("#openMenu").click(function(){
  $("nav").removeClass("navigation-close");
});

$("#closeMenu").click(function(){
  $("nav").addClass("navigation-close");
});

AOS.init({
  duration: 1000,
});

$('.section-two-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true
});

$('.section-our-teacher-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  slidesToShow: 5,
  pauseOnHover: true,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  centerPadding: '10px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,    
        centerMode: true,
        centerPadding: '120px',
            }  
    }
  ]
});

$('.product-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  slidesToShow: 4,
  pauseOnHover: true,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,    
        centerMode: true,
        centerPadding: '40px',
            }  
    }
  ]
});

$('.section-seven-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  centerPadding: '80px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,    
        centerMode: true,
        centerPadding: '80px',
        adaptiveHeight: true,
      }  
    }
  ]
});

$('.app-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('.app-slider2').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  pauseOnHover: true,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }  
    }
  ]
});

$('.about-section-one-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  arrows: false,
  infinite: true,
  pauseOnHover: true,
  slidesToShow: 2,
  slidesToScroll: 1,    
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }  
    }
  ]
});
$('.team-slider').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '20px',
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '80px',
      }  
    }
  ]
});
