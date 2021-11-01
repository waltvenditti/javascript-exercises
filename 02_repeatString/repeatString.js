const repeatString = function(string, numOfRepeats) {

    if (numOfRepeats == 0) {
        return ''; 
    }

    if (numOfRepeats < 0) {
        return 'ERROR'; 
    }

    let newString = ''; 
    for (i = numOfRepeats; i > 0; i--) {
        newString = newString + string;
    }

    return newString; 
};

// Do not edit below this line
module.exports = repeatString;
