# Neolink-test
# Custom Symbol to Integer Converter

This code contains a JavaScript function that converts a string of custom symbols to an integer. The custom symbols and their respective integer values are predefined in the function.

## Function Description

The `customSymbolToInt` function takes a string of custom symbols as its input and returns the corresponding integer value. The mapping of custom symbols to integer values is as follows:

- 'A': 1
- 'B': 5
- 'Z': 10
- 'L': 50
- 'C': 100
- 'D': 500
- 'R': 1000

The function implements the logic that if a smaller value symbol appears before a larger value symbol, it should be subtracted. For example, in the string "RCR", the value is 1000 - 100 + 1000 = 1900.

## Usage

Here is how you can use the `customSymbolToInt` function:

```javascript
let exampleInput1 = "AAA";
let exampleInput2 = "LBAAA";
let exampleInput3 = "RCRZCAB";

console.log(customSymbolToInt(exampleInput1)); // Output: 3
console.log(customSymbolToInt(exampleInput2)); // Output: 53
console.log(customSymbolToInt(exampleInput3)); // Output: 1994

