/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////


 
function add() {
    console.log(arguments.length);
  
  
if (arguments.length === 1) {
 
  return function(x){ return (x + arguments[0]); };
}
   

else {return (arguments[0]+arguments[1]);}

}

add(2)(3);
