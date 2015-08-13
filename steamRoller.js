function steamroller(arr){
    
    var flatArr = [];
    var isArr = false;
  //check if its an array or not.  
    for(i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i])){
          isArr = true; 
          console.log(isArr, i );
        }
    }    
  
    if(isArr) {
        
        for(var j =0; j<arr.length; j++){
            flatArr = flatArr.concat(arr[j]);
            console.log(flatArr);
            
        }
        steamroller(flatArr);
    }
    else {
        console.log(flatArr);
        return(flatArr);
    }
    
    }
    

steamroller([1, [2], [3, [[4]]]]);
