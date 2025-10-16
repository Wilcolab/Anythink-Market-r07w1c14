//Write a JavaScript function toCamelCase that converts strings to camelCase. Here are some examples: first name → firstName user_id → userId SCREEN_NAME → screenName mobile-number → mobileNumber Implement the function to handle these cases.

// Function to convert a string to camelCase
function toCamelCase(str) {
    return str
        .replace(/[-_ ]+(.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match, char) => char.toLowerCase());
}

// Example usage:
console.log(toCamelCase("first name")); // Output: "firstName"
console.log(toCamelCase("user_id")); // Output: "userId"
console.log(toCamelCase("SCREEN_NAME")); // Output: "screenName"
console.log(toCamelCase("mobile-number")); // Output: "mobileNumber"
// Function to convert a string to camelCase
function toCamelCase(str) {
    return str
        .replace(/[-_ ]+(.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match, char) => char.toLowerCase());
}   
