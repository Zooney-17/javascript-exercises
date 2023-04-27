const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    } else {
        let a = 1;
        let b = 0;
        let temp;

        while (number >= 1) {
            temp = a;
            a = a + b;
            b = temp;
            number--;
        };
        
        return b;
    };
};

// Do not edit below this line
module.exports = fibonacci;
