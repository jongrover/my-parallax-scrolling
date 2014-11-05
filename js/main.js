$(function(){

  var $slides = $('section');

  // resize slides to match window height
  function matchHeight() {
    $slides.height($(window).height());
  }
  matchHeight();

  // re-adjust on window re-sizing
  $(window).resize(matchHeight);
    
  // Initialize Skrollr plugin
  //skrollr.init();

  skrollr.init({
    render: function(data) {
      console.log(data.curTop);
    }
  });

  // doc: https://github.com/Prinzhorn/skrollr
  // demo: http://prinzhorn.github.io/skrollr/ 

});