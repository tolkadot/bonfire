//Sum all the prime numbers up to and including the provided number.
//dbryant 8aug15

function sumPrimes(num) {
 var arrOdds = [];
 var newarr = [];
 car tempArr = []; //arr for holind the outcome of modulus operation.
 for(i=1; i<=num; i++) //arr of all the odd numbers 1 to num & 2
 {
     if(i%2 !== 0 || i ===2 ){
     arrOdds.push(i);
     }
 }


var tempNum = 0; //tempNum will be the next number in arrOdds to check
  for(var n=1; n<tempNum-1; n++) { 
      tempArr.push(tempNum%n);
          
          
      }
      
      
      
  }
  

     
}
 
//console.log(arrOdds);
 
 // return num;


sumPrimes(13);
//sumPrimes(10);// 17
//sumPrimes(977);// 73156
