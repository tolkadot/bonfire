function where(arr, num) {
 
 arr.sort(function(a, b){
     console.log(arr);
     return a-b;
     });
for(i=0; i<arr.length; i++){
    if(num < arr[i]) 
     {
         console.log(i);
     }
}
 
 
 
 
   return num;
}

where([40, 60, 80, 10], 50);


