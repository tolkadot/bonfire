function titleCase(str) {

    var patt1 = /\s\w/g ;
    var patt2 = /\w/;
    
    str = str.toLowerCase().replace(patt1, function upperCase(x){
    return x.toUpperCase(); } );
    str = str.replace(patt2, function upperCase(x){
    return x.toUpperCase(); } );
    console.log(str);
    
   
  return str;
}


titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
titleCase("I\'m a little tea pot");
