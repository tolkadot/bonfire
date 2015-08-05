function diff(arr1, arr2) {
  var newArr = [];

//console.log(arr1.length); 
//console.log(arr2.length);

for(i=0; i<arr2.length; i++) {
    
        if (arr1.indexOf(arr2[i]) != -1) {
            console.log(arr1.indexOf(arr2[i]));
            
        }
        
    
    
}

if(arr1[0] === arr2[0]){
    //console.log(arr2[0]);
}

 
  //return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(['andesite', 'grass', 'dirt', 'dead shrub'],
 ['andesite', 'grass', 'dirt', 'dead shrub']);
 diff([1, 'calf', 3, 'piglet'], 
 [1, 'calf', 3, 4]);
