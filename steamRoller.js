//Flatten a nested array. You must account for varying levels of nesting.
//dbryant 11aug15 @tolkadot

function steamroller(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);


steamroller([[['a']], [['b']]]); //, ['a', 'b'], 'should flatten nested arrays');should flatten nested arrays: expected [ [ [ 'a' ] ], [ [ 'b' ] ] ] to deeply equal [ 'a', 'b' ]
steamroller([1, [2], [3, [[4]]]]); //, [1, 2, 3, 4], 'should flatten nested arrays');should flatten nested arrays: expected [ 1, [ 2 ], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 2, 3, 4 ]
steamroller([1, [], [3, [[4]]]]); //, [1, 3, 4], 'should work with empty arrays');should work with empty arrays: expected [ 1, [], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 3, 4 ]
