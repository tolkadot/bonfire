function where(collection, source) {
  var arr = [];
  var arr1 = Object.keys(collection);
  
for(var key in source) {
  
  for(var i=0; i<arr1.length; i++)
  {
     if(collection[arr1[i]][key] === source[key])
      {
      arr.push(collection[arr1[i]]);
      console.log(collection[arr1[i]]);
      }
  }
   return arr;    
  }
}
  
where([ { first: 'Romeo', last: 'Montague' }, 
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },], 
              { last: 'Capulet' });
              
where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 
{ 'a': 1 });
  
  
      
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
