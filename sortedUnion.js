//function that takes two or more arrays and returns a 
//new array of unique values in the order of the original provided arrays.

//dbryant 8aug15

function unite(arr1, arr2, arr3) {
    
    var arrayConcat = [arr1, arr2, arr3].reduce(function(a, b) {
    return a.concat(b);}); //concatenate the input arrays

    arr1 = []; 

    for(i=0; i<arrayConcat.length; i++) //for each item in arrayConcat
    {
      if(arr1.indexOf(arrayConcat[i]) === -1 ) //if its not there
       {
           arr1.push(arrayConcat[i]); //push it in.
       }
    }
  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4], 
unite([1, 3, 2], [1, [5]], [2, [4]]); // [1, 3, 2, [5], [4]]
