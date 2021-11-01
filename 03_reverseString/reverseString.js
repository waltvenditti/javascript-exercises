const reverseString = function(str) {
    reversedStr = ''; 
    for (i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    
    return reversedStr; 
};

// Do not edit below this line
module.exports = reverseString;
