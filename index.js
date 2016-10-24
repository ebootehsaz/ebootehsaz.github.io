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
   
    $('.big').mouseenter(function(){
    $('.big').fadeTo('fast',1.0);
    
});
    $('.big').mouseleave(function() {
        $('.big').fadeTo('fast',.5);
    
});
    
    
    
});

