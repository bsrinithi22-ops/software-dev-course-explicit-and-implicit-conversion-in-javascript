/*index .js


   PART 1 — DEBUGGING CHALLENGE
   ============================ */

// Example Bug 1: Unexpected string concatenation
let a = "5";
let b = 10;

// FIX: Convert "a" to a number so addition works correctly
let sum = Number(a) + b;
console.log("Sum:", sum); 
// Explanation: Without Number(), "5" + 10 becomes "510" because JS concatenates strings.

// Example Bug 2: Boolean confusion
let isReady = "false";

// FIX: Convert string to actual boolean
isReady = (isReady === "true");
console.log("Is Ready:", isReady);
// Explanation: Any non-empty string is truthy, so "false" would incorrectly behave as true.

// Example Bug 3: undefined causing NaN
let value;
console.log("Original value + 5:", value + 5); // NaN

// FIX: Convert undefined to 0 (or handle NaN)
let safeValue = Number(value);
if (isNaN(safeValue)) safeValue = 0;

console.log("Fixed value + 5:", safeValue + 5);
// Explanation: Number(undefined) → NaN, so we check and replace with 0.


