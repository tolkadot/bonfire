/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////

function enter(){
 var secondInput = 1;
 secondInput = prompt("enter another number");
    secondInput  = Number(secondInput);
   return secondInput;
}
 
function add(x, y) {
    
if (arguments.length === 1) {
   
   output = enter() + x;
   
    return output;
}
else {return x+y;}

}

add(2);
