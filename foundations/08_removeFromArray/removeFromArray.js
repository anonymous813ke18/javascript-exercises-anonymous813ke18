const removeFromArray = function(mainArr, ...args) {
    return mainArr.filter((num) => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
