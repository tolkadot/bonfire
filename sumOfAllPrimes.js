//Sum all the prime numbers up to and including the provided number.
//dbryant 8aug15

function sumPrimes(num) {
 var arrOdds = [];
 var newarr = [];
 for(i=1; i<=num; i++) //arr of all the odd numbers 1 to num & 2
 {
     if(i%2 !== 0 || i ===2 ){
     arrOdds.push(i);
     }
 }
  console.log(arrOdds);
  
  
 for(i=0; i<arrOdds.length; i++){  //for every number in the odd numbers array

//console.log(i);
 //console.log(arrOdds.indexOf(arr[i]));
 
 
  for(j=2; j<arrOdds.indexOf(arrOdds[i]); j++) {
      //if(arrOdds[i]%arrOdds[j] >1 && i!=j){ //if the number is prime
        //  newarr.push(arrOdds[i]); //push it to a new array
         //console.log(i , j, arrOdds[i] , arrOdds[j], arrOdds.indexOf(arrOdds[i]), " -----");
      }
  }
// console.log(newarr);
 }
     
 
 
 //console.log(arrOdds);
 
 // return num;


sumPrimes(10);
//sumPrimes(10);// 17
//sumPrimes(977);// 73156