const palindromes = function (string) {
    let storedString = string;
    let lower = storedString.toLowerCase();
    let noPuncutation = lower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let noSpace = noPuncutation.replace( /\s/g, '');
    return noSpace === noSpace.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
