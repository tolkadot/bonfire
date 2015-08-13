function steamroller(arr){
    
    var flatArr = [];
    var isArr = false;
    
    for(i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr)){
            isArr = true;
        }
    }
    
    if(isArr) {
        
        for(var j =0; j<arr.length; j++){
            newArr = newArr.concat.arr[j];
        }
        steamroller(newArr);
    }
    else {
        return(newArr);
    }
        
        
    }
    

steamroller([1, [2], [3, [[4]]]]);
