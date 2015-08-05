function sumAll(arr) {
arr = arr.sort(function(a, b){return a-b});

var total = 0;
for( i=arr[0]; i<arr[1]+1; i++)
{
    total+=i;
}
    return total;  
   }
sumAll([10, 5]);
sumAll([1, 7]);
