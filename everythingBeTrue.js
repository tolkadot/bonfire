/////////////////////////////////////////////////////////////////////////////
//Check if the predicate (second argument) 
//returns truthy (defined) for all elements of a collection (first argument).
//dbryant 14aug15 @tolkadot
////////////////////////////////////////////////////////////////////////////

function every(collection, pre) {
  // Does everyone have one of these?
  var exists = [];
  
  for(i=0; i<collection.length; i++){
 var foo  = collection[i].hasOwnProperty(pre);
 if (foo){
      
   exists.push(true);
   
  }
  else{
     exists.push(false);
  }

  }
  if(exists.lastIndexOf(false) === -1){
  return true;}
  else { return false;}
}

/*every([{'user': 'Tinky-Winky', 'sex': 'male'}, 
       {'user': 'Dipsy', 'sex': 'male'}, 
       {'user': 'Laa-Laa', 'sex': 'female'}, 
       {'user': 'Po', 'sex': 'female'}], 'sex'); //true
       */
every([{'user': 'Tinky-Winky', 'sex': 'male'}, 
{'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, 
{'user': 'Po', 'sex': 'female'}], {'sex': 'female'}); //false, 
