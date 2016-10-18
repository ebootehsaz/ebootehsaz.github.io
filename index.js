$(document).ready(function() {
   $('.big').mouseenter(function() {
       $(this).animate({
           height: '+=25px'
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

$(document).ready(function() {
    $('.big' ).fadeOut(10000);
});
