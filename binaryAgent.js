//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
    var counter = 0;
    var binArr = [];
    var binNum = [];
    var decArr = [];
  binArr = str.split(' ');
  
  for(i=0; i<binArr.length; i++) {
      counter = 0;
       binNum = binArr[i];
       console.log(binNum[0], binNum[1], binNum[2], binNum[3]);
        if (binNum[0] === '1'){
            console.log("hello");
        counter = counter + 128;}
        if( binNum[1] === '1'){
        counter += 64;}
        if(binNum[2] === '1')
        counter += 32;
        if(binNum[3] === '1')
        counter += 16;
        if(binNum[4] === '1')
        counter += 8;
        if(binNum[5] === '1')
        counter += 4;
        if(binNum[6] === '1')
        counter += 2;
        if(binNum[7] === '1')
        counter += 1;
     // console.log(binNum[0], counter);
      decArr.push(counter);
      console.log(decArr);
      
  }
  for(j=0; j<decArr.length(); j++)
  
  String.fromCharCode(decArr[0]);
}


binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');



//dbryant 13aug15 @tolkadot
