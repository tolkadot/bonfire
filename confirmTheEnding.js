function end(str, target) {


var foo = str.split("");
var bar = target.split("");

console.log(bar);
console.log(foo[foo.length-1]);
console.log(foo.length-1);
    if(bar[bar.length-1] === foo[foo.length-1]){
    
    console.log("yupdidooo");
    return true;
  }
  else {
    return false;
  }
}


end('He has to give me a new name', 'name');
