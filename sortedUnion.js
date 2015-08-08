//function that takes two or more arrays and returns a 
//new array of unique values in the order of the original provided arrays.

//dbryant 8aug15

function unite(arr1, arr2, arr3) {
    
    var arrayConcat = [arr1, arr2, arr3].reduce(function(a, b) {
    return a.concat(b);});

    arrTemp = [];
    arrTemp.push(arr1[0]);
    
    for(i=0; i<arrayConcat.length; i++)
    {
        for(j=0; j<arrTemp.length; j ++){
        if(arrayConcat[i] != arrTemp[j]){
            arrTemp.push(arrayConcat[i]);
            console.log(arrTemp);
        }
        
    }
    
    }
  //return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4], 
//unite([1, 3, 2], [1, [5]], [2, [4]]); // [1, 3, 2, [5], [4]]
