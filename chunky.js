function chunk(arr, size) {
    
    var arr1 = [];
    var arr2 = [];
  var i = 0;
  //
  //{
  //console.log(j);
  
     
       for (j=0; j<(arr.length)/size; j++)
        {
            
           arr2.push(arr[i], arr[i+1]);
           console.log(arr2);
           arr1[j] = arr2;
           arr2 = [];
           console.log(arr1);
            
            
             i = i+size;
            //moo.push([j], foo[i]); 
        }
 
   //console.log(arr1);
   // console.log(arr2);
 // }
   
  
  
  return arr1;
}

chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 2);
