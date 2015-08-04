function where(arr, num) {
 var place;
arr.sort(function(a, b) {
  return a - b;
});


for(i=0; i<arr.length; i++){
    if(num > arr[i]) 
     {
         place = i +1;
     }
}
  num = place;
  return num;
}

where([40, 60, 80, 10], 50);
