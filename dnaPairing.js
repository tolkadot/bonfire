function pair(str) {
var arrOfPairs = ['A', 'T', 'C', 'G'];
var arrInput = str.split("");
var arr1 = [],  arr2 = [],  arr3 = [],  arr4 = [];
console.log(arrInput[0]);

for(i=0; i<arrInput.length; i++)
{
    console.log(arrInput[i]);
    switch(arrInput[i]) {
    case "A" :
    arr1.push(arrInput[i], arrOfPairs[1]);
    console.log(arr1);
    break;
    case "T" :
    arr2.push(arrInput[i], arrOfPairs[0]);
    console.log(arr2);
    break;
    case "C" :
    arr3.push(arrInput[i], arrOfPairs[3]);
    console.log(arr3);
    break;
    case "G" :
    arr4.push(arrInput[i], arrOfPairs[2]);
    console.log(arr4);
    break;
    }
}
}
     


//return str;


pair("ATCGA");

/*pair("GCG");
pair("ATCGA"),//[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']], 
pair("CTCTA"),//[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']], 
*/
