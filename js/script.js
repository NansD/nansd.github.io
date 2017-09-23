$(function(){
  Chart.defaults.global.defaultFontSize = 20


   $(".contact").on("click", function(){
     $('html,body').animate({
       scrollTop: $(".contact-form").offset().top
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
  });

  var ctx = document.getElementById("myChart");
  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Drinking', 'Sleeping', 'Hiking'],
      datasets: [{
          data: [20, 10, 4, 2, 15, 13, 19]
      }],
      options: {
        labels: {
          fontSize: 20
        }
      }
    }
  });
});
