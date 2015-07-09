function repeat(str, num) {
  // repeat after me
  
  var strb = "";
  if(num !== 0) {
  for( i=0; i<num; i++)
    {
      console.log(str);
      strb += str;
    }
  } 
  else {
    return "";
  }
  
  return strb;
}

repeat('*', 8);
