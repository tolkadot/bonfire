/////////////////////////////////////////////////////////////////////////////
//Create a function that sums two arguments together. If only one argument is provided, 
//return a function that expects one additional argument and will return the sum
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////


 
function add() {
  
 var z = arguments[0];
 if(isNaN(z) === true) { 
  var foo;
    var bar =  typeof foo;
    return bar;
    }
    
else if(arguments.length === 1) {
 
  return function(x){
      //if(isNaN(x || z) === false) { console.log('nope');}
      console.log(x, z);
      return (x + z); };
}
   

else {return (arguments[0]+arguments[1]);}

}

add('hello')(3);
