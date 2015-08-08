//Sum all the prime numbers up to and including the provided number.
//dbryant 8aug15

function sumPrimes(num) {
 var arr = [];
 var newarr = [1];
 for(i=1; i<=num; i++) //arr of all the numbers 1 to num
 {
     if(i%2 !== 0 || i ===2 ){
     arr.push(i);
     }
 }
  console.log(arr);
  
  
 for(i=0; i<arr.length; i++){  //for every number in the array
 
  for(j=0; j<arr.length; j++) {
      if(arr[i]%arr[j] >1 && i!=j){ //if the number is prime
          newarr.push(arr[i]); //push it to a new array
          //console.log(newarr);
      }
  }
 console.log(newarr);
 }
     
 
 
 //console.log(arr);
 
 // return num;
}

sumPrimes(10);
//sumPrimes(10);// 17
//sumPrimes(977);// 73156
