//Sum all the prime numbers up to and including the provided number.
//dbryant 9aug15 @tolkadot

function sumPrimes(num) {
 var sum = 0;
 var arrOdds = [];
 var primeArr = [1, 2];
 var modulusArr = []; //arr for holding the outcome of modulus operation.
 
 for(i=1; i<=num; i++) //arr of all the odd numbers 1 to num & 2
 {
     if(i%2 !== 0 || i ===2 ){
     arrOdds.push(i);
     }
 }

for (i=2; i<arrOdds.length; i++) {
  for(var n=2; n<arrOdds[i]; n++) { 
      modulusArr.push(arrOdds[i]%n); //push the outcome of mod operator to array.
      }
      if(modulusArr.indexOf(0) == -1){ //if the modulus of the calc is never 0
       primeArr.push(arrOdds[i]); //the number is prime - push it to primeArr
      }
       modulusArr =[]; //reset the modulus array
}


for(i=1; i<primeArr.length; i++)
{
     sum = sum+primeArr[i]; //add all the primes together.
     num =sum;
    
}
return num;

}
 
sumPrimes(10);
sumPrimes(10);// 17
sumPrimes(977);// 73156
