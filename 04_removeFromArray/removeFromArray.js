const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(val => !valuesToRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
