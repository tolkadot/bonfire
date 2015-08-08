//Return the sum of all odd Fibonacci numbers up to and 
//including the passed number if it is a Fibonacci number.
//dbryant 8aug15

function sumFibs(num) {
    
    var fibArr = [1, 1];
    
    for (i=0; i<num; i ++){
        console.log((fibArr[i] + fibArr[i+1])%2);
        //if(((fibArr[i] + fibArr[i+1])%2) !== 0){
        fibArr.push(fibArr[i] + fibArr[i+1]);
        //}
      
      }
    console.log(fibArr);
    
  //return num;
}

sumFibs(10);
//sumFibs(1);
//sumFibs(1000); //1785
//sumFibs(4000000);// 4613732
//sumFibs(4);// 5
//sumFibs(75024);// 60696
//sumFibs(75025);// 135721
