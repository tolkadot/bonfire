function steamroller(arr){
    
    var flatArr = [];
    var isArr = false;
    
    for(i=0; i<arr.length; i++)
    {
        //console.log(arr[i]);
        if(Array.isArray(arr[i])){
          isArr = true;
        //console.log(isArr);
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
        return(flatArr);
    }
   
    }
    

steamroller([1, [2], [3, [[4]]]]);
