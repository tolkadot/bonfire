/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////


 
function add() {
  
 var z = arguments[0];
 //console.log(isNaN(arguments[1]) );
 //console.log(typeof(arguments[1]));
 
 if ((typeof(arguments[1]) != 'number') || (typeof(arguments[0]) != 'number')) {
  return;
 }
    
 if(arguments.length === 1) { return function(x){ return (x + z); };}
   
   else {return (arguments[0]+arguments[1]);}

}

add(2, '3');
