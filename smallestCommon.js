//Find the smallest number that is evenly divisible by all numbers in the provided range.
//dbryant 9aug15 @tolkadot

function smallestCommons(arr) {
    
    var rangeArr=[]; //array of the full range of numbers arr[0] to arr[1]
    var modulusArr=[];
    arr = arr.sort(function(a, b){ //sort the array lowest to highest
        return a-b;
    });
    console.log(arr);
    
    for(i=0; i<arr[1]; i++){ 
        rangeArr.push(i+1); 
    }
    console.log(rangeArr);
    
    for(i=rangeArr.length -1; i===1; i--)
    { console.log(i)}
    
    
    
    
  //return arr;
}

smallestCommons([5,1]);// 60
smallestCommons([1,5]);
//smallestCommons([5,1]);// 60
//smallestCommons([1,13]);// 360360
