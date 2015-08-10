//Find the smallest number that is evenly divisible by all numbers in the provided range.
//This is probably not the best mathematical approach to this problem, but it is effective
//none the less.

//dbryant 10aug15 @tolkadot

function smallestCommons(arr) {

    var rangeArr = []; //array of the full range of numbers arr[0] to arr[1]
    arr = arr.sort(function (a, b) { //sort the array lowest to highest
        return a - b;
    });
    

    for (i = 0; i < arr[1]; i++) {
        rangeArr.push(i + 1); //array of the full range of numbers arr[0] to arr[1]
    }

// function to retun the modulus of two numbers
    function checkNext(number1nextnum, number2rangenum) {
        return number1nextnum % number2rangenum;

    }

    var nextNum = arr[1] + 1; //start trial and error testing at the next number

    for (i = 1; i <= rangeArr.length; i++) {
        //if there is a modulus check the next number & reset the divisor 
        if (checkNext(nextNum, rangeArr[i]) >= 1) 
        {
            nextNum++;
            i = 1;
        } 
        //otherwise try the next divisor
        else { 
            checkNext(nextNum, rangeArr[i]);
        }

    }
 
    console.log(nextNum);

}
smallestCommons([1,5]); // 60
//smallestCommons([1,5]);
//smallestCommons([5,1]);// 60
//smallestCommons([1,13]);// 360360
