function chunk(arr, size) {
    var i = 0;
    var arr1 = [];
    var arr2 = [];
       for (j=0; j<(arr.length)/size; j++)
        {
          
            for(z=0; z<size; z++)
            {
                if(i <= arr.length -1)
                    {
                     arr2.push(arr[i]);
                     i++;
                    }
            }
        arr1[j] = arr2;
        arr2 = [];
 }
 return arr1;
}

chunk([0, 1, 2, 3, 4, 5], 4);
