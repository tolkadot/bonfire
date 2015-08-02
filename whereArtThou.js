function where(collection, source) {
  var arr = [];
  var arr1 = Object.keys(collection);
  var arr2 = [];
  // arr1 = ["0", "1", "2", "3"]



for(var key in source) {
   arr2.push(source[key]);
   // console.log(arr2); // = ["Capulet"]
   console.log(key);
}
   
   
  
 
  for(var i=0; i<arr2.length; i++)
  {
     //console.log(source.bar);
      //if(collection[arr2[i]].bar === source.bar)
      //{
      //arr.push(collection[arr2[i]].bar)
      //console.log(arr)
      //}
  }
  
  
      
  }
  
  
 // return arr;


where([{ first: 'Romeo', 
         last: 'Montague' }, 
        { first: 'Mercutio', 
          last: null },
        { first: 'Tybalt', 
          last: 'Capulet' },
          { first: 'Tybalt', 
          last: 'Capulet' }], 
              { last: 'Capulet' });
              
//where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 
//{ 'a': 1 });
