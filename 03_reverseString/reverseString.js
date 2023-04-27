const reverseString = function(string) {
    let reversedString = "";
    let num = string.length;
    for (let i = num; i >= 0; i--) {
        reversedString += string.substr(i,1);
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
