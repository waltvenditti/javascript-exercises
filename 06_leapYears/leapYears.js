const leapYears = function(year) {
    
    let divisBy4 = false;
    let divisBy100 = false;
    let divisBy400 = false;

    if (year % 4 == 0) {
        divisBy4 = true;
    }
    if (year % 100 == 0) {
        divisBy100 = true;
    }
    if (year % 400 == 0) {
        divisBy400 = true; 
    }

    if (divisBy4 === false) {
        return false;
    } else if (divisBy100 === false) {
        return true; 
    } else if (divisBy400 === true) {
        return true;
    } else {
        return false; 
    }

}

// Do not edit below this line
module.exports = leapYears;
