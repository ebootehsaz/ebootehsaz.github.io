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
   
});
