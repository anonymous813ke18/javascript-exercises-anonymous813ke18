const fibonacci = function(num) {
    if (!Number.isInteger(num)) num = Number.parseInt(num);
    if (num === 0) return 0;
    if (num < 0) return 'OOPS';

    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        let total = a + b;
        a = b;
        b = total;
    }
    return (b);
};

// Do not edit below this line
module.exports = fibonacci;
