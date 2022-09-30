/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {
    let result = "";
    const cipherKey = 13;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < str.length; i++) {
        
        let iIndex = alphabet.indexOf(str[i]);
        let alphaIndex = "";
        let alphaLetter = "";

        if (iIndex === -1) {
            result += str[i];
        } else {
            alphaIndex = ((iIndex + cipherKey) % alphabet.length ); // Caesars Cipher formula
            alphaLetter = alphabet[alphaIndex];
            result += alphaLetter;
        };
    };
    return result;
};

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR CVMMN!"));