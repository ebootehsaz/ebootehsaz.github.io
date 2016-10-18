$(document).ready(function() {
   $('.big').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
             width: ' +=15px'
       });
   });
   $('.big').mouseleave(function() {
       $(this).animate({
           height: '-=15px'
          width: ' -=10px'
       }); 
   });
   $('.big').click(function() {
       $(this).toggle(1000);
   }); 
});

$(document).ready(function() {
    $('.big' ).fadeOut(100);
});
