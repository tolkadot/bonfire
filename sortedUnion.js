//function that takes two or more arrays and returns a 
//new array of unique values in the order of the original provided arrays.

//dbryant 8aug15

function unite(arr1, arr2, arr3) {
    
    arrTemp = [];
    arrTemp.push(arr1[0]);
    
    
    for(i=0; i<arr1.length; i++)
    {
        for(j=0; j<arrTemp.length; j ++){
        if(arr1[i] != arrTemp[j]){
            arrTemp.push(arr1[i]);
            console.log(arrTemp);
        }
        
    }
    
    }
  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4], 
unite([1, 3, 2], [1, [5]], [2, [4]]); // [1, 3, 2, [5], [4]]
