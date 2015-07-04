function stringToArray(abcd, separator) {
  var stringArray = abcd.split(separator).reverse().join('');
return stringArray;
}
function reverseString(str_str){
  return stringToArray(str_str, '');
}
reverseString('goodbye');



/*----------------------------

function stringToArray(abcd, separator) {
  var stringArray = abcd.split(separator);
  console.log(stringArray);
    
  stringArray.reverse();
  console.log(stringArray);

  var foobar = stringArray.join('');
  console.log(foobar);
  return foobar;
}


function reverseString(str_str){
  var bar = "";
  stringToArray(str_str, bar);
  
}



/*stringToArray("Hello World" , bar);

stringToArray('hello', bar);

reverseString('goodbye');

-------------------------*/
