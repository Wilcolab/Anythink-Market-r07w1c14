//Create a function that converts strings to dot.case format
// Function to convert a string to dot.case
function toDotCase(str) {
    return str      

        .replace(/[-_ ]+/g, '.') // Replace spaces, hyphens, and underscores with dots  
        .replace(/([a-z])([A-Z])/g, '$1.$2') // Add dot between camelCase words
        .toLowerCase(); // Convert the entire string to lowercase
}
