var userFirst; 
var userLast;

function userName()
{
	userFirst=prompt("Enter First Name");

	userLast=prompt("Enter Last Name");

	
document.getElementById("first").innerHTML=userFirst.substring(0,3) + userLast.substring(0,2) + "@yahoo.com";

}


