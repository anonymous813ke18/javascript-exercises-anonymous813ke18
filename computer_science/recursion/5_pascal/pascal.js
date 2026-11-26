const pascal = function(counter) {
  let currentLine = [1]
  if(counter === 1)
    return currentLine;

  let previousLine = pascal(counter - 1)
  previousLine.forEach((number, i) => {
    const rightNeighbour = previousLine[i + 1] ?? 0;
    currentLine.push(number + rightNeighbour);
  })

  return currentLine;
};

// pascal(3)
//   pascal(2)
//     pascal(1)
//     return[1]
//   return [1, 1]
// [1, 2, 1]
  
// Do not edit below this line
module.exports = pascal;
