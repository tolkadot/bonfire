function where(collection, source) {
  var arr = [];
  var arr2 = Object.keys(collection);
  // arr2 = ["0", "1", "2", "3"]


  for (var foo in source) {
  if (source.hasOwnProperty(foo)) {
   var bar = foo;

for(var key in source) {
    var val = source[key];
    console.log(val);

}
   
   
   
   //console.log(source[foo]);
   //Capulet
   //console.log(foo); //console.log(bar);
   //last
  }
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
              
where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 
{ 'a': 1 });
