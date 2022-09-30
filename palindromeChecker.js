/*Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.*/

function palindrome(str) {
    //RegExp for matching characters
    const regex = /[a-zA-Z0-9]/ig;
    
    //delete non-alphanumeric characters
    const myArr = str.match(regex);
    const myStr = myArr.join("").toLowerCase();

    //reverse array && turn to lower case
    const reverseArr = myArr.reverse();
    const myReverseStr = reverseArr.join("").toLowerCase();

    //compare with original string
    if (myStr === myReverseStr) {
        return true;
    } else {
        return false;
    };
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("race car"); //should return true.
palindrome("not a palindrome"); //should return false.
palindrome("A man, a plan, a canal. Panama"); //should return true.
palindrome("never odd or even"); //should return true.
palindrome("nope"); //should return false.
palindrome("almostomla"); //should return false.
palindrome("My age is 0, 0 si ega ym."); //should return true.
palindrome("1 eye for of 1 eye."); //should return false.
palindrome("0_0 (: /-\ :) 0-0"); //should return true.
palindrome("five|\_/|four"); //should return false.

console.log(palindrome("not a palindrome"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("never odd or even"));