

function total(i){
var qt =document.getElementsByClassName("qt")[i].value
var price= document.getElementsByClassName("T.article")[i].textContent
	var calculprice=qt*price
    document.getElementsByClassName("priceByarticles")[i].innerHTML = calculprice

   }
   function TotAll(){
 
	var sum = 0
    var art1=document.querySelectorAll('.art1');
    var qt =document.getElementsByClassName("qt")
 
    var price= document.querySelectorAll(".priceByarticles")
    
     
	for (var i = 0; i < art1.length; i++) {
	
		sum =sum + Number(document.getElementsByClassName("priceByarticles")[i].textContent);
		
	}
	
     document.getElementById("sum").textContent= sum+"$"
   }
function remove(i)
{  
let a= document.getElementsByClassName("art1")[0]
   a.remove();

}
//    function remove(i)
// {  
// let a= document.getElementsByClassName("art1")[i];
//    a.remove();

// }