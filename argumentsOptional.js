/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////


 
function add() {
  
 var z = arguments[0];  // rename the first argument so that we can use it in our new function

//if we have one input and its a number return a function that uses a second number.
//make sure that the new function had a valid imput.
  if(arguments.length === 1 && typeof(arguments[0]) === 'number') {
       return function(x){ 
     console.log(typeof(x));
     if(typeof(x) === 'number'){
     return (x + z); }};} //return the sum of the two inputs
    
     // check if either of the two arguments are not numbers - return undefined if they are
if ((typeof(arguments[0]) != 'number') || (typeof(arguments[1]) != 'number')) {
  return;
 }
//otherwise return the sum of both.
   else {console.log(arguments[0]+arguments[1]);
       return (arguments[0]+arguments[1]);}

}
//add(2, 3);
//add(2)(3);
//add(2, '3');
add(2)([3]);
//add('http://bit.ly/IqT6zt');
