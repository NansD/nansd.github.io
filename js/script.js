$(function(){
  $(".scroll").on("click", function(){
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    });
  })
})