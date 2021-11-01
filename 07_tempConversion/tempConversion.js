const ftoc = function(tempInF) {
  let tempInC; 
  tempInC = (tempInF - 32) * (5/9); 
  tempInC = roundToOneDecimal(tempInC);
  return tempInC
};

const ctof = function(tempInC) {
  let tempInF;
  tempInF = tempInC * (9/5) + 32;
  tempInF = roundToOneDecimal(tempInF);
  return tempInF;
};

function roundToOneDecimal(float) {
  float *= 10;
  float = Math.round(float);
  float /= 10;
  return float; 
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
