//extracting objects from html
const $navMenu = $('nav');
const $navAsideArrow = $('div.wrapper-nav nav ul li:nth-of-type(1) a');
const $sectionNav = $('div.wrapper-nav');

//used values for functions
const scrollValue = $(window).scrollTop();
const sectionNavDist = $sectionNav.offset().top;
const $navArrowHeight = parseInt($navAsideArrow.css('height'));

//menu going down with the scrolling
function scrollThroughPage() {
    if (scrollValue >= sectionNavDist - $navArrowHeight) {
        $navMenu.addClass('scrolling');
        $navAsideArrow.addClass('show');
    } else {
        $navMenu.removeClass('scrolling');
        $navAsideArrow.removeClass('show');
    }
};

$(document).on("scroll", scrollThroughPage);
//end 


//menu shows currently viewed section with different colors
// function menuChangeColor() {
  
//     const heightNav2 = $(".skills").offset().top;
//     const heightNav3 = $(".projects").offset().top;
//     const heightNav4 = $(".hobby").offset().top;
//     const heightNav5 = $(".contact").offset().top;
  
//     if (scrollValue < heightNav2) {
//       $("li").not(".profile").removeClass("active");
//       $(".profile").addClass("active");
//     } else if (scrollValue < heightNav3) {
//       $("li").not(".skills").removeClass("active");
//       $(".skills").addClass("active");
//     } else if (scrollValue < heightNav4) {
//       $("li").not(".projects").removeClass("active");
//       $(".projjects").addClass("active");
//     } else if (scrollValue < heightNav5) {
//       $("li").not(".hobby").removeClass("active");
//       $(".hobby").addClass("active");
//     } else {
//       $("li").not(".contact").removeClass("active");
//       $(".contact").addClass("active");
//     }
//   }
  
// $(window).on("scroll", menuChangeColor);
//end

//links from menu point smothly to the section

//end 