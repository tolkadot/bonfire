//Find the smallest number that is evenly divisible by all numbers in the provided range.
//dbryant 9aug15 @tolkadot

function smallestCommons(arr) {
    
    var rangeArr=[]; //array of the full range of numbers arr[0] to arr[1]
    var modulusArr=[]; //array of the lowest denominators to be removed from rangeArr
    arr = arr.sort(function(a, b){ //sort the array lowest to highest
        return a-b;
    });
    //console.log(arr);
    
    for(i=0; i<arr[1]; i++){ 
        rangeArr.push(i+1); 
    }
    console.log(rangeArr);
  
  //generate an array of all the lowest denominators.
  for(j=rangeArr.length-1 ; j>1; j--) {
  for(i=2; i<j; i++){
        //modulusArr.push(tempNum%i);
        if(j%i === 0)
        { 
         modulusArr.push(i); //array of all the nums to be removed from rangeArr
        }
  }
  }
console.log(modulusArr);
}

smallestCommons([15,1]);// 60
//smallestCommons([1,5]);
//smallestCommons([5,1]);// 60
//smallestCommons([1,13]);// 360360
