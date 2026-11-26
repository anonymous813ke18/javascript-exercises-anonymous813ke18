const isObject = (value) => typeof value === 'object' && value !== null

const totalIntegers = function (obj) {
    let count = 0;

    if (!isObject(obj)) {
        return;
    }

    const elements = Object.values(obj);

    for (const el of elements) {
        if (Number.isInteger(el))
            count++;
        else if (isObject(el))
            count += totalIntegers(el);
    }

    return count;
}

console.log(totalIntegers([1]))

// const totalIntegers = function(arr) {
//     if (Array.isArray(arr)){
//         return arr.reduce((prev, cur) => {
//             if (cur === null)
//                 return prev
        
//             if (Number.isInteger(cur))
//                 return prev += 1;
//             if (Array.isArray(cur) || typeof cur === 'object') {
//                 return prev + totalIntegers(cur);
//             } 
//             return prev
//         }, 0);
//     } else if (typeof arr === 'object') {
//         let sum = 0;
//         for (let val of Object.values(arr)) {
//             if (val === null)
//                 continue

//             if (Number.isInteger(val)) {
//                 sum += 1;
//             }
//             if (Array.isArray(val) || typeof val === 'object') {
//                 sum += totalIntegers(val);
//             } 
//         }
//         return sum
//     }
//     return undefined;
// };

// Do not edit below this line
module.exports = totalIntegers;
