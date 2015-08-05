function convert(num) {
 //return num;
 arr2 =[];
 var arr = ['0', 'I', "II","III", 'IV', "V", "VI", "VII", "VIII", "IX", "X"];
 num = num.toString().split('');
 
 //console.log(num);
 
//units
 arr2.push(arr[num[(num.length - 1)]]);
 
//tens
 var tens = (num[num.length - 2]);
 for (i=0; i<tens; i++)
  arr2.push(arr[10]);
 
//console.log(tens);
console.log(arr2);
 
 
 
}

convert(36);
convert(12);
convert(5);
convert(9)

convert(29);
convert(16);

