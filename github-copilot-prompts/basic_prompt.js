//Come up with a prompt for a function that converts strings to camelCase. Include at least one example in your prompt
// Function to convert a string to camelCase    
function toCamelCase(str) {
    return str
        .replace(/[-_ ]+(.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match, char) => char.toLowerCase());
}
