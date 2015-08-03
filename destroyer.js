function destroyer(arr) {
  // Remove all the values
  
  for(i=1; i<arguments.length; i++){
      for (j = 0; j<arr.length; j++){
          
          if(arguments[i] === arr[j]){
              arr.splice(j, 1);
          }
          
      }
      
  }
  
  console.log(arguments.length);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
