//identifies if a letter is missing and returns it.
//dbryant 7Aug2015

function fearNotLetter(str) 
{
  var arrOfInput = []; 
  //console.log(str);
  for (var i=0; i<str.length; i++)
  {
    //console.log(str.charCodeAt(i));
    arrOfInput.push(str.charCodeAt(i)); //push unicode vals to array
  //console.log(str.charCodeAt(i));
  //console.log(arrOfInput);
  }
   
   for(i=0; i<arrOfInput.length -1; i++) //for each member of the array
   { 
     // console.log(arrOfInput[i+1]);
     // console.log(arrOfInput[i]);
    // var condition =  arrOfInput[i+1] - arrOfInput[i]
     if((arrOfInput[i+1] - arrOfInput[i]) > 1 ){ //if the diff btwen entires is more than 1 ie. they are not consecutive
     console.log(arrOfInput[i] + 1);
     str = String.fromCharCode((arrOfInput[i] + 1)); //get the char that's missing
     console.log(str);
     return str
     }
     else {
         str = undefined;
         //console.log(str);
     }
     }
        return str;

}




//fearNotLetter('abce');// 'd'
//fearNotLetter('bcd');// undefined
fearNotLetter('abcdefghjklmno');// 'i'
//fearNotLetter('yz');// undefined*/
