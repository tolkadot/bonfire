/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////
function add(x, y) {
    
    var secondInput = 1;
if (arguments.length === 1) {
    secondInput = prompt("enter another number");
    secondInput  = Number(secondInput);
   output = secondInput + x;
    return output;
}
else {return x+y;}

  //return false;
}

add(2);
