function isFalse(x){
return Boolean(x);
    }

function bouncer(arr) {

arr = arr.filter(isFalse);

  return arr;
}

console.log(bouncer([7, 'ate', '', false, 9, null, 0, "", undefined, NaN]));
