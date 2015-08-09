//Sum all the prime numbers up to and including the provided number.
//dbryant 8aug15

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

console.log(arrOdds);
for (i=2; i<arrOdds.length; i++) {
var tempNum = arrOdds[i]; //tempNum will be the next number in arrOdds to check
  for(var n=2; n<tempNum; n++) { 
      modulusArr.push(tempNum%n); //push the outcome of mod operator to array.
      }
      if(modulusArr.indexOf(0) == -1){ //if the modulus of the calc is never 0
       primeArr.push(tempNum); //the number is prime - push it to ne
      }
       modulusArr =[]; //reset the modulus array
      
}
console.log(primeArr);

for(i=0; i<primeArr.length; i++)
{
     sum = sum+primeArr[i]
    
}

}
 
//console.log(arrOdds);
 
 // return num;


sumPrimes(13);
//sumPrimes(10);// 17
//sumPrimes(977);// 73156
