$(document).ready(function() {
   $('.big').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.big').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.big').click(function() {
       $(this).toggle(1000);
   }); 
});
