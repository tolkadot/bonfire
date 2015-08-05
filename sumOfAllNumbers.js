function sumAll(arr) {

/*  var total = arr[0];
  var counter = 0;
  while(counter<(arr[1] - arr[0] +1)){
      total = total+1;
      counter = counter+1;
  }*/
        
        
        var y = arr[1];
        var total = arr[0];
        
        
        function sum(x){
            for(var i = x; i<y; i++) {
           total = x + (sum(x+1)) ;
           console.log(total);
        }
        sum(2);
        }
        
     return total;  
   }
  
  
  


sumAll([1, 7]);
