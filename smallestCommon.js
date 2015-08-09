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
  
  var tempNum = 15; //where tempNum = next entry in rangeArr
  
  for(i=2; i<tempNum; i++){
        //modulusArr.push(tempNum%i);
        if(tempNum%i ===0)
        { 
         modulusArr.push(i); //
          //console.log(i);
        }
        console.log(modulusArr);
  }
  //return arr;
}

smallestCommons([7,1]);// 60
//smallestCommons([1,5]);
//smallestCommons([5,1]);// 60
//smallestCommons([1,13]);// 360360
