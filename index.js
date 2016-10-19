$(document).ready(function() {
   $('.big').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('.big').mouseleave(function() {
       $(this).animate({
           height: '-=15px'
       
       }); 
   });
   $('.big').click(function() {
       $(this).toggle(1000);
   }); 
});

