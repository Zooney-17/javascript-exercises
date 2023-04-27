const findTheOldest = function(array) {
    array.forEach((object) => {
        if (!object.hasOwnProperty('yearOfDeath')) {
            object.yearOfDeath = new Date().getFullYear();
        };
    });
    array.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    array.reverse();
    console.log(array[0]);
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
