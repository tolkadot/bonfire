
function factorialize(numr) {
    if(numr === 0){
        return 1;
    }
    else
    {
        
     return ( numr * factorialize(numr-1));        
      
    }
 
}

factorialize(5);
