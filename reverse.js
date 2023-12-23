// Function to reverse a string
function reverse(str) {
  // Initialize an empty string to store the reversed result
  let reversedStr = "";

  // Iterate through the characters of the input string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversedStr += str[i];
  }

  // Return the final reversed string
  return reversedStr;
}

// Example usage
const str = "Hello world";
const reversedStr = reverse(str);

// Log the original and reversed strings to the console
console.log("Original String:", str);
console.log("Reversed String:", reversedStr);
