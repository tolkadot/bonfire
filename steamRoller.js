//Flatten a nested array. You must account for varying levels of nesting.
//dbryant 11aug15 @tolkadot

/*function steamroller(arr) {
  var flatArr = [];
  var shifted;
  
  
      
  /*    console.log(a, b);
  return a.concat(b); }
  

for(i=0; i<=arr.length; i++){
    console.log(i);
  shifted = arr.reduce(shrink);
  console.log(shifted);
}



console.log(shifted);

}*/

function shrink(a, b){
      if(isArray.Array(a)) {
          arr.reduce();
          console.log(a, b, arr)
           console.log(a, b);
  return a.concat(b);
      }
      else { console.log('not array')}
  }

shrink([1, [2]]);  





//steamroller([[['a']], [['b']]]); //, ['a', 'b'], 'should flatten nested arrays');should flatten nested arrays: expected [ [ [ 'a' ] ], [ [ 'b' ] ] ] to deeply equal [ 'a', 'b' ]
//steamroller([1, [2], [3, [[4]]]]); //, [1, 2, 3, 4], 'should flatten nested arrays');should flatten nested arrays: expected [ 1, [ 2 ], [ 3, [ [Object] ] ] ] to deeply equal [ 1, 2, 3, 4 ]
//steamroller([1, [], [3, [[4]]]]); //, [1, 3, 4], 'should work with empty array
