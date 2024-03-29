$(document).ready(() => $('div.welcome').addClass('active'));

//extracting objects from html
const $navMenu = $('nav');
const $navAsideArrow = $('div.wrapper-nav nav ul li:nth-of-type(1) a');
const $sectionNav = $('div.wrapper-nav');

//used values for function
const heightNav1 = $('div.welcome').offset().top;
const heightNav2 = $(".section-wrap").offset().top;
const heightNav3 = $("section.projects").offset().top;
const heightNav4 = $("section.hobby").offset().top;
const heightNav5 = $("section.contact").offset().top;
const sectionNavDist = $sectionNav.offset().top;
const $navArrowHeight = parseInt($navAsideArrow.css('height'));

//menu going down with the scrolling
function scrollThroughPage() {
  const scrollValue = $(window).scrollTop();

  if (scrollValue >= sectionNavDist - $navArrowHeight) {
    $navMenu.addClass('scrolling');
    $navAsideArrow.addClass('show');
  } else {
    $navMenu.removeClass('scrolling');
    $navAsideArrow.removeClass('show');
  }

  if (scrollValue < heightNav1 - $navArrowHeight) {
    $("li").removeClass("active");
  } else if (scrollValue < heightNav2 - $navArrowHeight) {
    $("li").not(".profile").removeClass("active");
    $(".profile").addClass("active");
  } else if (scrollValue < heightNav3 - $navArrowHeight) {
    $("li").not(".skills").removeClass("active");
    $(".skills").addClass("active");
  } else if (scrollValue < heightNav4 - $navArrowHeight) {
    $("li").not(".projects").removeClass("active");
    $(".projects").addClass("active");
  } else if (scrollValue < heightNav5 - $navArrowHeight) {
    $("li").not(".hobby").removeClass("active");
    $(".hobby").addClass("active");
  } else {
    $("li").not(".contact").removeClass("active");
    $(".contact").addClass("active");
  }
};

$(window).on("scroll", scrollThroughPage);
//end

//mobile menu showing up function
$('nav.mobile, aside a').on("click", () => $('aside, .menu-mobile').toggleClass('show'));

//header effect while scrolling down
const $doc = $(document);
const $header = $('header');
const $about = $('.profile');

$doc.on("scroll", function () {
  const scrollValue = $(window).scrollTop();
  const sectionOffset = $about.offset().top;
  const headerHeight = $header.outerHeight();

  if (scrollValue < sectionOffset) {
    $header.css({
      'opacity': 1 - scrollValue / (headerHeight * 2),
      'filter': 'grayscale(' + 2 * scrollValue / headerHeight + ')'
    })
  }
})