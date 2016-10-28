$(document).ready(function() {
   $('.car, .edc, .img, .work, .int, .ex').mouseenter(function() {
       $(this).animate({
           height: '+=30px'
       });
   });
   $('.car, .edc, .work, .img, .int, .ex').mouseleave(function() {
       $(this).animate({
           height: '-=15px'
       
       }); 
   });
   
   $('.car, .edc, .work, .img, .int, .ex').click(function() {
       $(this).fadeIn(0.0);
   }); 
   
     $('.car, .edc, .work, .img, .int, .ex').click(function() {
       $(this).fadeOut(1.0);
   }); 


    
    
});

