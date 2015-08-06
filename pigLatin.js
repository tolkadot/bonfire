

function translate(str) {
   var arr = str.split('');
    //console.log(arr[0]);
    var arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
    //console.log(arrOfVowels[0]);
    //console.log(arrOfVowels.length);
    
    
    //work out the indices of the first occurence of a vowel in the word.
    var  arrOfIndices =[];
   
    for(i=0; i<arrOfVowels.length; i++){
    if(arr.indexOf(arrOfVowels[i]) >= 0){
    arrOfIndices.push(arr.indexOf(arrOfVowels[i]));
    arrOfIndices.sort(function(a, b) { return a - b;});
    
    }
    }
    
    switch (arrOfIndices[0]) {
  case 0 :
    arr.push('w', 'a', 'y');
    console.log(arr);
    break;
  case 1 :
      var temp = arr.splice(0, 1);
      arr.push(temp[0], "a", "y");
    console.log(arr);
    break;
  case 2 :
     var temp2 = arr.splice(0, 2);
      arr.push(temp2[0],temp2[1], "a", "y");
    console.log(arr);
    break;
  
  default:
    console.log("Sorry no vowels here");
}
 str = arr.join('');
return(str);

}

//translate("rhythm");
translate("consonant");
/*translate("algorithm");
translate("california");// 'aliforniacay'
translate("paragraphs");// 'aragraphspay'
translate("glove");// 'oveglay'
translate("algorithm");// 'algorithmway'
translate("eight");// 'eightway'
translate("trash"); // "ashtray" */
