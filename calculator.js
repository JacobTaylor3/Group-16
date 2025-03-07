// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    // calc square root and return
    const root = Math.sqrt(value);
    return root;
}

// TODO: Implement square function
function calculateSquare(value) {
  return value ** 2;
}

// TODO: FIX reciprocal function
function calculateReciprocal(value) {
  // Hint: Reciprocal is 1/x
  return value === 0 ? NaN : 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
  return Math.LN10(value);
}

// TODO: Implement sine function
function sine(value) {
  return Math.sin(value);
}

// TODO: Implement cosine function
function cosine(value) {
  return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
  // return the tangent of the value
  return sine(value)/cosine(value)
}

module.exports = {
  calculateSquareRoot,
  calculateSquare,
  calculateReciprocal,
};
