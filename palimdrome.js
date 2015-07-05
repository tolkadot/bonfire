function palindrome(str)
{
str = str.toLowerCase().replace(/(\W+)/g, "");

var rev_boo = str.split('').reverse().join('');
console.log(str);

return(str === rev_boo);
}
palindrome('rac e, C    AR');
