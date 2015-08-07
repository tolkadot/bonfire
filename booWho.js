//Check if a value is classified as a boolean primitive. 
//dbryant 7Aug2015


//primitive Boolean values are true and false

function boo(bool) {
 
 if(bool === true || bool === false){
     console.log("true");
     return(true);
 }
 else {
     console.log(false);
 
     return(false);
 }
 
  return bool;
}

boo(null);


boo(true);//, true);
boo(false);//, true);//expected false to equal true
boo([1, 2, 3]);//, false);//expected [ 1, 2, 3 ] to equal false
boo([].slice);//, false);//expected [Function: slice] to equal false
boo({ 'a': 1 });//, false);//expected { a: 1 } to equal false
boo(1);//, false);//expected 1 to equal false
boo(NaN);//, false);//expected NaN to equal false
boo('a');//, false);//expected 'a' to equal false
