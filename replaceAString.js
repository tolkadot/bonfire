function replace(str, before, after) {
   str = str.split(' '); // split my string into an array called str
   
   //check for capitalisation//
   before1 = before.split(''); 
   after1 = after.split('');
   if(before1[0] == before1[0].toUpperCase()) { 
       after1[0] = after1[0].toUpperCase();
       after = after1.join('');
   }
   //loop through the str array//
 for(i=0; i<str.length; i++){ 
    if(str[i] === before){ //compare each entry in str array
     str.splice(i, 1, after); // replace
     str = str.join(' '); //make it back into a string
   }
   }
 return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
replace("Let us go to the store", "store", "mall");
replace("He is Sleeping on the couch", "Sleeping", "sitting");
replace("Let us get back to more Coding", "Coding", "bonfires");
replace("His name is Tom", "Tom", "john");
