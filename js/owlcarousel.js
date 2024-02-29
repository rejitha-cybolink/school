// best hotel slider

$(".owl-carousel-latestnews").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    850: {
      items: 3,
    },
    1150: {
      items: 4,
    },
  },
});

$(".owl-carouseltestimonial").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});