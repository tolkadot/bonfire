

function titleCase(str) {
    
    var bar = [];
    bar = str.split(" ");
    console.log(bar);
    
    var boo = str.charAt(4).toUpperCase();
    console.log(boo);
    var patt = /\s\w/g ;
    str = str.replace(patt,  function upperCase(x){
    return x.toUpperCase(); } );
    console.log(str);
    
   
  return str;
}


titleCase("I'm a little tea pot");
