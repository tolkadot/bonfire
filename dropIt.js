//Drop the elements of an array (first argument), starting from the front, 
//until the predicate (second argument) returns true.
//dbryant 10aug15 @tolkadot

function drop(arr, func) {
 //arr = [1, 2, 3, 4]
 // function(n) {return n >= 3; }
    
    for(i=0; i<=arr.length; i++)
    {   
    
    var outcome = func(arr[i]);
        if(outcome === false)       {
        arr.shift();
            console.log(arr);
        }
        }
    
    
  return arr;
}



drop([1, 2, 3, 4], function(n) {return n >= 3; });//[ 3, 4 ]
//drop([1, 2, 3], function(n) {return n > 0; });//[1, 2, 3];
//drop([1, 2, 3, 4], function(n) {return n > 5; });//[]
//drop([1, 2, 3], function(n) {return n < 3; });
