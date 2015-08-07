function pair(str) {
var arrOfPairs = ['A', 'T', 'C', 'G'];
var arrInput = str.split("");
var arr1 = [],  arr2 = [],  arr3 = [],  arr4 = [], finalArray =[]; //temp arrays

for(i=0; i<arrInput.length; i++)  //for every input 
{
    switch(arrInput[i]) {
    case "A" :
    arr1.push(arrInput[i], arrOfPairs[1]); //push pair to temp array
    finalArray.push(arr1); //push pair to final array
    arr1 =[]; //reset temp array
    break;
    case "T" :
    arr2.push(arrInput[i], arrOfPairs[0]);
    finalArray.push(arr2);
    arr2 =[];
    break;
    case "C" :
    arr3.push(arrInput[i], arrOfPairs[3]);
    finalArray.push(arr3);
    arr3 =[];
    break;
    case "G" :
    arr4.push(arrInput[i], arrOfPairs[2]);
    finalArray.push(arr4);
    arr4 =[];
    break;
    }

}
str = finalArray;
return str;
}
     
pair("ATCGA");

/*pair("GCG");
pair("ATCGA"),//[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']], 
pair("CTCTA"),//[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']], 
*/
