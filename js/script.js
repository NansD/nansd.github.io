$(function(){
  $(".scroll").on("click", function(){
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    });
  });
  $('.dashboard-link').on("click", function(){
    $('html,body').animate({
      scrollTop: $("#dashboard").offset().top
    });
  });

  $('.send-mail').on('click', function(){
    var subject = $('#form32').val();
    var body = $('#form7').val();
    window.open('mailto:dumortier.nans@gmail.com?subject=' + subject + '&body=' +body);
  })
})