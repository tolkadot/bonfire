//Drop the elements of an array (first argument), starting from the front, 
//until the predicate (second argument) returns true.
//dbryant 10aug15 @tolkadot

function drop(arr, func) {
  // Drop them elements.
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });


drop([1, 2, 3, 4], function(n) {return n >= 3; });//[ 3, 4 ]
drop([1, 2, 3], function(n) {return n > 0; });//[1, 2, 3];
drop([1, 2, 3, 4], function(n) {return n > 5; });//[]
