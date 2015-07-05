function findLongestWord(str) {

  var arr = str.split(' ');
        
  var boo = arr.length;
        
  var foo = [];
        
        
        
  for(var i=0; i<boo; i++)
  {
         console.log(arr[i].length);
         foo.push(arr[i].length);
         console.log(foo);
  }
  foo.sort();
  console.log(foo[arr.length -1]);
  
    return foo[arr.length -1];
}

findLongestWord('The quick brown fox jumped over the lazy dog');
