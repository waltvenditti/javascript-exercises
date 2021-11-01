const removeFromArray = function(array) {
    numElementsToRemove = arguments.length - 1; 

    for (let i = numElementsToRemove; i > 0; i--) {
        elementToRemove = arguments[i];

        for (let i = array.length -1 ; i >= 0; i--) {
            if (array[i] === elementToRemove) {
            array.splice(i, 1); 
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
