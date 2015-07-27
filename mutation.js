function mutation(arr) {
    var str1 = arr[0].toLowerCase();
    var str2 = arr[1].toLowerCase();
    var foo = [];
   
   arr1 = str1.split('');
   arr2 = str2.split('');
   
  
   
   for(var i=0; i<arr2.length; i++)
         {
         var a = arr1.indexOf(arr2[i]);
         foo.push(a);
         }
         
  
   if(foo.lastIndexOf(-1) >=0)
        {
            return false;
        }
        else 
        {
            return true;
        }
}
mutation(['Mary', 'Aarmy']);
