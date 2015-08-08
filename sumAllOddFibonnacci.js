//Return the sum of all odd Fibonacci numbers up to and 
//including the passed number if it is a Fibonacci number.
//dbryant 8aug15

function sumFibs(num) {
    
    var fibArr = [1, 1];
    var fibArrOdd =[];
    var total = 0;
    
    for (i=0; i<num; i ++){ //generate fib series
     fibArr.push(fibArr[i] + fibArr[i+1]);
      }
    //console.log(fibArr);
    
    for (i=0; i<=num; i++) { //fib series  of odd nums up to num
        if((fibArr[i]%2 ===1) && (fibArr[i] <= num) )
        fibArrOdd.push(fibArr[i]);
        }
    
    for(i=0; i<fibArrOdd.length; i++) //sum them up 
    {
         total = total + fibArrOdd[i];
    }
    
    //console.log(fibArrOdd);
    console.log(total);
    
    
    
  //return num;
}

sumFibs(1000);
sumFibs(1);
sumFibs(1000); //1785
sumFibs(4000000);// 4613732
sumFibs(4);// 5
sumFibs(75024);// 60696
sumFibs(75025);// 135721
