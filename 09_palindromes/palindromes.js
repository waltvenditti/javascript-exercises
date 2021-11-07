const palindromes = function (string) {
    //string = string.toLowerCase();
    stringArray = string.toLowerCase().split('');

    for (let i=(stringArray.length-1); i >= 0; i--) {
        code = stringArray[i].charCodeAt(0);
        if (code <= 96 || code >= 123 ) {
            stringArray.splice(i,1);
        }
    }

    string = stringArray.join('');
    let reverseString = ''
    for (let j = string.length-1; j >= 0; j--) {
        reverseString += string[j];
    }

    if (string == reverseString) return true;
    else return false; 
}

// Do not edit below this line
module.exports = palindromes;
