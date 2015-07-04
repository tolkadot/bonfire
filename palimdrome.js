function palindrome(str)
{
var boo = str.split('');
console.log(boo);
var rev_boo = boo.reverse();
console.log(rev_boo);

var bar = str.length;


for(var i=0; i<bar; i++)
{
    console.log(i);
if(boo[i] === rev_boo[i])
{
console.log(true);
}
else 
{
    console.log(false);
}
}
}
palindrome('abcbj');
