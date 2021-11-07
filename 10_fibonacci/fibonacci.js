const fibonacci = function(number) {
    number *= 1;
    if (number < 0) return 'OOPS';

    let x = 2;
fibSeq = [1, 1];
if (number - fibSeq.length > 0) {
    for (let i = number-fibSeq.length; i>0; i--) {
        let newVal = (fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2]);
        fibSeq.push(newVal);
    }
}  

return fibSeq[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
