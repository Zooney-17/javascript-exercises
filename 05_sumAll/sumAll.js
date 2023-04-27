const sumAll = function(integer1, integer2) {
  if ((integer1 < 0) || (integer2 < 0)) return 'ERROR';
  if ((typeof integer1 != "number") || (typeof integer2 != "number")) return 'ERROR';
  let finalSum = 0;
  if ( integer1 < integer2) {
    for (let i = integer1; i <= integer2; i++) {
      finalSum += i;
    }
    return finalSum;
  }
  if (integer2 < integer1) {
    for (let i = integer2; i <= integer1; i++) {
      finalSum += i;
    }
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
