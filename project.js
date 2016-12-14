$(document).ready(function() {
	
			 
	   $('.box1, .box2, .box3').mouseenter(function() {
       $(this).animate({
           height: '+=25px'
		   
       });
   });
   
      $('.box1, .box2, .box3').mouseleave(function() {
       $(this).animate({
           height: '-=25px'
		  
       }); 
   });

$(".head1, .head2, .head3, .head4").click(function() {
  $(this).toggle( "explode" );
  
});   


$('.par1, .par2, .par3, .par4').click(function() {
  $(this).toggle( "blind" );
  
});

   
});
