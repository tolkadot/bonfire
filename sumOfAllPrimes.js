/Sum all the prime numbers up to and including the provided number.
//dbryant 8aug15

function sumPrimes(num) {
 var arr = [];
 var newarr = [];
 for(i=1; i<=num; i++) //arr of all the odd numbers 1 to num & 2
 {
     if(i%2 !== 0 || i ===2 ){
     arr.push(i);
     }
 }
  console.log(arr);
  
  
 for(i=0; i<arr.length; i++){  //for every number in the odd numbers array
 console.log(arr.indexOf(arr[i]));
 
 
  for(j=0; j<arr.indexOf(arr[i]); j++) {
      if(arr[i]%arr[j] >1 && i!=j){ //if the number is prime
          newarr.push(arr[i]); //push it to a new array
          console.log(newarr);
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
