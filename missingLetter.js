//identifies if a letter is missing and returns it.
//dbryant 7Aug2015

function fearNotLetter(str) {
  var alphabet = ['a', 'b','c', 'd','e', 'f','g', 'h','i', 'j','k', 'l','m', 'n','o', 'p','q', 'r','s', 't','u', 'v','w', 'x','y', 'z'];
  var arrOfInput = [];
  
  for (i=0; i<str.length; i++)
  {
      console.log(str.charCodeAt(i));
  arrOfInput.push(str.charCodeAt(i));
  //console.log(str.charCodeAt(i));
  //console.log(arrOfInput);
  }
   
   /*for(i=0; i<arrOfInput.length; i++)
   { 
      console.log(arrOfInput[i+1]);
      console.log(arrOfInput[i]);
       
      /* if((arrOfInput[i+1] - arrOfInput[i]) > 1 ){
     console.log(i+1);
       }
   
   }*/
  
  
  //return str;
}




fearNotLetter('abce');// 'd'
/*fearNotLetter('bcd');// undefined
fearNotLetter('abcdefghjklmno');// 'i'
fearNotLetter('yz');// undefined*/
