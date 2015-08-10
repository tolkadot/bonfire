//Create a function that looks through an array (first argument) and returns 
//the first element in the array that passes a truth test (second argument).
//dbryant 10aug15 @tolkadot
function find(arr, func) {
    
    //arr = [1, 2, 3, 4]
    // func = function(num){ return num % 2 === 0; }
    
  var num = 0;
    for(i=0; i<arr.length; i++) {
        num = arr[i];
        if(func(num) === true){
            console.log(num);
        return num;
        }
  
    }
    
    
//    return num;   
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // undefined if not found: expected 0 to equal undefined
