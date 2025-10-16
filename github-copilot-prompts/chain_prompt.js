//Create a production-grade JavaScript function toKebabCase(input) by executing these steps in order: 1) Validate & normalize: if input is null/undefined or not a string, throw TypeError; trim; apply Unicode NFKD and strip diacritics; replace punctuation except ._-/: with spaces. 2) Tokenize: treat whitespace, _, -, ., /, : as separators; also split camel/PascalCase at lower→Upper and letter↔digit boundaries; collapse repeats; drop empty tokens. 3) Transform: lowercase tokens, keep digits within words, join with -, and ensure no leading/trailing -; make idempotent for already-kebab; convert ALL-CAPS tokens to normal words (e.g., SCREEN_NAME→screen-name). 4) Document & export: add JSDoc with examples and edge cases; export as ES module. 5) Test: add a small node:test or Jest suite covering "First Name"→"first-name", "user_id"→"user-id", "SCREEN_NAME"→"screen-name", "FullName"→"full-name", "already-kebab"→"already-kebab", "API v2 response"→"api-v2-response", "Crème brûlée"→"creme-brulee", "rock 'n' roll"→"rock-n-roll", and non-string inputs throwing TypeError. 6) Quality pass: ensure O(n), no external dependencies, pure function, and clear error messages.
// Function to convert a string to kebab-case
export
function toKebabCase(input) {
    // Step 1: Validate & normalize
    if (input == null || typeof input !== 'string') {
        throw new TypeError('Input must be a non-null string');
    }
    let str = input.trim();
    str = str.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''); // Strip diacritics
    str = str.replace(/[^\w\s._\-/:]/g, ' '); // Replace unwanted punctuation with spaces
    
    // Step 2: Tokenize
    const tokens = str
        .split(/[\s._\-/:]+|(?<=[a-z])(?=[A-Z])|(?<=[A-Za-z])(?=\d)|(?<=\d)(?=[A-Za-z])/)
        .filter(token => token.length > 0);
    if (tokens.length === 0) return '';
            
    // Step 3: Transform
    const kebabTokens = tokens.map(token => {
        if (/^[A-Z0-9]+$/.test(token)) {
            return token.toLowerCase(); // Convert ALL-CAPS to lowercase
        }
        return token.toLowerCase();
    });
    return kebabTokens.join('-').replace(/^-+|-+$/g, ''); // Join with - and trim
}
