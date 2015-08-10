//Find the smallest number that is evenly divisible by all numbers in the provided range.
//dbryant 9aug15 @tolkadot

function smallestCommons(arr) {

    var rangeArr = []; //array of the full range of numbers arr[0] to arr[1]
    var modulusArr = []; //array of the lowest denominators to be removed from rangeArr
    arr = arr.sort(function (a, b) { //sort the array lowest to highest
        return a - b;
    });
    //console.log(arr);

    for (i = 0; i < arr[1]; i++) {
        rangeArr.push(i + 1);
    }
    console.log(rangeArr);
    console.log(rangeArr[4]);


    function checkNext(number1nextnum, number2rangenum) {
        return number1nextnum % number2rangenum;

    }

    var nextNum = 6;
   // console.log(nextNum);

    for (i = 1; i <= rangeArr.length; i++) {
        if (checkNext(nextNum, rangeArr[i]) >= 1)

        {
            console.log("checkd this time", nextNum, rangeArr[i], 'if');
            nextNum++;
            i = 1;
            console.log("gonna check next", nextNum, rangeArr[i]);
        } else {
            checkNext(nextNum, rangeArr[i]);
            console.log(nextNum, rangeArr[i],'else' ,i);
        }

    }
 //console.log(rangeArr[4]);
    //console.log(nextNum);

    //console.log(checkNext(8, 2));

}
smallestCommons([1,13]); // 60
//smallestCommons([1,5]);
//smallestCommons([5,1]);// 60
//smallestCommons([1,13]);// 360360
