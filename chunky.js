function chunk(arr, size) {
    
    var foo = [];
    var moo = [];
  var i = 0;
  //
  //{
  //console.log(j);
  
     
       for (j=0; j<(arr.length)/size; j++)
        {
             moo.push(foo.push(arr[i], arr[i+1]));
            console.log(moo);
             i = i+size;
            //moo.push([j], foo[i]); 
        }
    
   //console.log(moo);
 // }
   
  
  
 // return arr;
}
