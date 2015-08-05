function convert(num) {
 arr2 =[];
 var arr = ['0', 'I', "II","III", 'IV', "V", "VI", "VII", "VIII", "IX", "X", "L", "C"];
 num = num.toString().split('');
//units
 arr2.push(arr[num[(num.length - 1)]]);
//tens up to 30
 var tens = (num[num.length - 2]);
 for (i=0; i<tens; i++)
  arr2.push(arr[10]);
 num = arr2.reverse().toString().replace(/,/gi, '');
 
 return(num);
}

convert(12);
//convert(5);
//convert(9)

//convert(29);
//convert(16);
//convert(36);


