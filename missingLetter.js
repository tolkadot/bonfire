//identifies if a letter is missing and returns it.
//dbryant 7Aug2015

function fearNotLetter(str) 
{
  var arrOfInput = [];
  //console.log(str);
  for (var i=0; i<str.length; i++)
  {
    //console.log(str.charCodeAt(i));
    arrOfInput.push(str.charCodeAt(i));
  //console.log(str.charCodeAt(i));
  console.log(arrOfInput);
  }
   
   for(i=0; i<arrOfInput.length -1; i++)
   { 
      console.log(arrOfInput[i+1]);
      console.log(arrOfInput[i]);
    // var condition =  arrOfInput[i+1] - arrOfInput[i]
     if((arrOfInput[i+1] - arrOfInput[i]) > 1 ){
     console.log(arrOfInput[i] + 1);
     }
       }
   
  
  
  //return str;

}




fearNotLetter('abce');// 'd'
/*fearNotLetter('bcd');// undefined
fearNotLetter('abcdefghjklmno');// 'i'
fearNotLetter('yz');// undefined*/
