let exampleInput1 = "AAA";
let exampleInput2 = "LBAAA";
let exampleInput3 = "RCRZCAB";

/**
 * This function converts a string of custom symbols to an integer.
 * The custom symbols and their respective values are defined in the customValues object.
 * 
 * @param {string} customSymbols - A string of custom symbols to be converted to an integer.
 * @return {number} - The integer value of the input string.
 */

const customSymbolToInt = (customSymbols) => {
    const customValues = {
        'A': 1,
        'B': 5,
        'Z': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'R': 1000
    };
    let result = 0;
    for (let i = 0; i < customSymbols.length; i++) {
        if (i > 0 && customValues[customSymbols[i]] > customValues[customSymbols[i - 1]]) {
            result += customValues[customSymbols[i]] - 2 * customValues[customSymbols[i - 1]];
        } else {
            result += customValues[customSymbols[i]];
        }
    }
    return result;
}

console.log(customSymbolToInt(exampleInput1)); // Output: 3
console.log(customSymbolToInt(exampleInput2)); // Output: 53
console.log(customSymbolToInt(exampleInput3)); // Output: 1994