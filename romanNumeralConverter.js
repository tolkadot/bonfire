//convert to roman numerals up to & including 100

function convert(num) {
 arr2 =[];
 var arr = ['', 'I', "II","III", 'IV', "V", "VI", "VII", "VIII", "IX", "X", "L", "C"];
 num = num.toString().split('');
 
//units
 arr2.push(arr[num[(num.length - 1)]]); 
 var tens = (num[num.length - 2]);
 
 //case of 100
 if(tens < 1){
    arr2.push(arr[12]);}
     
  //tens up to 30  
    else if(tens<=3){
    for (i=0; i<tens; i++){
     arr2.push(arr[10]);}}
 
 //tens up to 40
  else if(tens <=4){
  arr2.push(arr[11]);
  arr2.push(arr[10]);}
        //tens up to 50
        else if(tens <=5){
        arr2.push(arr[11]);}
            //tens up to 80
            else if(tens <9){
            for (i=5; i<tens; i++){
            arr2.push(arr[10]);}
            arr2.push(arr[11]);}
                 //tens up to 90
                else if(tens < 10){
                arr2.push(arr[12]);
                arr2.push(arr[10]);}
                
 num = arr2.reverse().toString().replace(/,/gi, '');
 return(num);
}

convert(75);
//convert(5);
//convert(9)

//convert(29);
//convert(16);
//convert(36);
