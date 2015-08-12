//Flatten a nested array. You must account for varying levels of nesting.
//dbryant 11aug15 @tolkadot

function steamroller(arr) {
 
  var shifted;
    var shifted2;
 if(Array.isArray(arr)){
    shifted = arr.shift();
     if(Array.isArray(shifted))
     {
     shifted2 = shifted.shift();
     }
 
  console.log(arr, shifted);
  console.log(arr, shifted2);
 }
}

steamroller([['a']]);


//steamroller([[['a']], [['b']]]); //, ['a', 'b'], 'should flatten nested arrays');should flatten nested arrays: expected [ [ [ 'a' ] ], [ [ 'b' ] ] ] to deeply equal [ 'a', 'b' ]
//steamroller([1, [2], [3, [[4]]]]); //, [1, 2, 3, 4], 'should flatten nested arrays');should flatten nested arrays: expected [ 1, [ 2 ], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 2, 3, 4 ]
//steamroller([1, [], [3, [[4]]]]); //, [1, 3, 4], 'should work with empty array
