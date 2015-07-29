function isFalse(x){
if(Number.isNaN(x)){
    return false
}

  else if (x === false || x === '' || x===0 || x ===undefined || x ===null) {
       return false;
   }
  else {
      return true;
}
    
    }

function bouncer(arr) {

arr = arr.filter(isFalse);

  return arr;
}

bouncer([7, 'ate', '', false, 9, null, 0, "", undefined, NaN]);
