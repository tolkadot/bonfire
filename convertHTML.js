//Convert the characters "&", "<", ">", '"' (double quote), 
//and "'" (apostrophe), in a string to their corresponding HTML entities.

//dbryant 8aug15

function convert(str) {
  
 str = str.replace(/&/gi, '&amp');
 str = str.replace(/>/gi, '&gt;');
  str = str.replace(/</gi, '&lt;');
   str = str.replace(/"/gi, '&quot;');
    str = str.replace(/'/gi, '&apos;');

  
 return str;
}

convert('Dolce & Gabbana');
convert('Hamburgers < Pizza < Tacos');
convert('Sixty > twelve'); 
convert('Stuff in "quotation marks"'); 
convert("Shindler's List");
convert('<>');
convert('abc');
