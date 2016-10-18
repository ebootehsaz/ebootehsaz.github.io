$(document).ready(function() {
   $('.big').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       });
   });
   $('.big').mouseleave(function() {
       $(this).animate({
           height: '-=25px'
       }); 
   });
   $('.big').click(function() {
       $(this).toggle(1000);
   }); 
});
