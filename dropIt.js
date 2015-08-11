//Drop the elements of an array (first argument), starting from the front, 
//until the predicate (second argument) returns true.
//dbryant 11aug15 @tolkadot

function drop(arr, func) {

    for(i = 0; i<arr.length;){ //for the first element in the array
  
  
  if (arr === []) // if the array is empty return it
  {
      return arr;
  }
   else if(func(arr[i]) === false) // if the function elavs to false shift the array
    {
        console.log('false');
        arr.shift();
        console.log(arr);
    }
    
    else {
   console.log('true');// if the function elavs to true return the array
   return arr;
    }
    }
   
  return arr;

}

//drop([1, 2, 3, 4], function(n) {return n >= 3; });//[ 3, 4 ]
//drop([1, 2, 3], function(n) {return n > 0; });//[1, 2, 3];
drop([1, 2, 3, 4], function(n) {return n > 5; });//[]
//drop([1, 2, 3], function(n) {return n < 3; });
