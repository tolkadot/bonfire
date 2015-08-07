//identifies if a letter is missing and returns it.
//dbryant 7Aug2015

function fearNotLetter(str) 
{
  var arrOfInput = [];  //create empty array to store unicode vals
  for (var i=0; i<str.length; i++) //for each letter in the string
  {
    arrOfInput.push(str.charCodeAt(i)); //push unicode vals to array
  }
   
   for(i=0; i<arrOfInput.length -1; i++) //for each member of the array
   { 
     if((arrOfInput[i+1] - arrOfInput[i]) > 1 ){ //if the diff btwen entires is more than 1 ie. they are not consecutive
     str = String.fromCharCode((arrOfInput[i] + 1)); //get the char that's missing
     return str;
     }
     else 
     {
         str = undefined;
     }
    }
        return str;
} 
fearNotLetter('abce');// 'd'
fearNotLetter('bcd');// undefined
fearNotLetter('abcdefghjklmno');// 'i'
fearNotLetter('yz');// undefined*/
