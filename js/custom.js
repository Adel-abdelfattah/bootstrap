var wid = 992;
$(".nav-item").hover(function(){
  if( $(window).innerWidth() >= wid) { 
    $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(350).delay(3000);
  }
});

$(".nav-item").click(function(){
  if( $(window).innerWidth() < wid) { 
    $(this).children('.dropdown-menu').slideToggle(350);
  }
});


$(".search").click(function(){
  $(".dropdown-search").toggleClass("ddd");
  return false;
});



$(document).click(function() {
  $(".dropdown-search").removeClass("ddd");
}); 

$(".dropdown-search").click(function(e) {
  e.stopPropagation();
});

$("#right-form").click(function(){
  $(".overlay").show();
  $(".right-form").addClass("gh");
});

$(".overlay, .rotate").click(function() {
  $(".overlay").hide();
  $(".right-form").removeClass("gh");
});


$(window).on("scroll", function(){
  var winTop = $(window).scrollTop();
  if (winTop >=140){
    $(".sticky-nav").addClass("ghgh");
  }else{
    $(".sticky-nav").removeClass("ghgh");
  }
});