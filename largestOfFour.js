function bigger(a, b)
{return b-a;}


function largestOfFour(arr) {
    
   var bar =[];
   
   for(var i=0; i<arr.length; i++){
        
   var foo = arr[i].sort(bigger);
 
   bar.push(foo[0]);
   
    }
    
    console.log(bar);
   return bar;
}

largestOfFour([[4, 5, 1, 3], [99, 27, 18, 26], [700, 35, 37, 39], [1000, 1001, 857, 1]]);

   
