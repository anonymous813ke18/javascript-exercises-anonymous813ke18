const contains = function(obj, val) {
    const values = Object.values(obj);
    
    if (values.includes(val)) return true;

    const nestedObj = values.filter(value => typeof(value) === "object" && value !== null);

    return nestedObj.some((nestedObj) => {
        contains(nestedObj, val);
    })
};
  
// Do not edit below this line
module.exports = contains;
