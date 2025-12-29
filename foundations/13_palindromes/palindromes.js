const palindromes = function (str) {
    let reversedStr = str
                .toLowerCase()
                .split("")
                .reverse()
                .filter((word) => word.match(/[a-z0-9]/i))
                .join('');
    let cleanedStr = str
                .toLowerCase()
                .split("")
                .filter((word) => word.match(/[a-z0-9]/i))
                .join('');
    
    return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;