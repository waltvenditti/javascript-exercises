currentYear = (new Date()).getFullYear();

const findTheOldest = function(personArray) {
    let oldest = personArray.reduce((prevObj, currObj) => {
        if (calcAge(prevObj) > calcAge(currObj)) {
            return prevObj;
        } else {
            return currObj;
        };
    });
    return oldest;
};

function calcAge(obj) {
    dob = obj['yearOfBirth'];
    if (!('yearOfDeath' in obj)) {
        console.log(currentYear - obj['yearOfBirth']);
        return currentYear - obj['yearOfBirth'];
    } else {
        console.log(obj['yearOfDeath'] - obj['yearOfBirth']);
        return obj['yearOfDeath'] - obj['yearOfBirth'];
    };
};

// Do not edit below this line
module.exports = findTheOldest;
