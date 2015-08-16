 
function add() {
    console.log(arguments.length);
    
if (arguments.length === 1) {
 
  function(x) { return x + arguments[0] }
}
   

else {return (arguments[0]+arguments[1]);}

}

add(2)(3);
