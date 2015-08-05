function diff(arr1, arr2) {
  var newArr = [];

for(i=0; i<arr2.length; i++) {
    
        if (arr1.indexOf(arr2[i]) === -1) {
            //console.log(i);
            console.log(arr2[i]);
            newArr.push(arr2[i]);
            console.log(newArr);
        }
}
        for(i=0; i<arr1.length; i++) {
    
        if (arr2.indexOf(arr1[i]) === -1) {
            //console.log(i);
            console.log(arr1[i]);
            newArr.push(arr1[i]);
            console.log(newArr);
        }
        
    
    console.log(newArr);
}




 
  return newArr;
}
