//convert to roman numerals up to 9

function convertToNine(num) {
var arr = ['', 'I', "II","III", 'IV', "V", "VI", "VII", "VIII", "IX", "X", "L", "C"];
 num = num.toString().split(''); //["7", "5"]
//units
num.splice(0, 1, arr[num[0]]);
 return(num);
}

convertToNine(5);
