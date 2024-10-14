class StringNormalizer {
    constructor(inputString) {
        this.inputString = inputString;
    }

    // Method to remove extra spaces from the beginning and end
    trimSpaces() {
        return this.inputString.trim();
    }

    // Method to remove special characters and punctuation, leaving only alphanumeric characters and spaces
    removeSpecialCharacters(str) {
        return str.replace(/[^a-zA-Z0-9\s]/g, '');
    }

    // Method to replace multiple spaces between words with a single space
    replaceMultipleSpaces(str) {
        return str.replace(/\s+/g, ' ');
    }

    // Method to convert the cleaned string to camel case
    toCamelCase(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    // Main method that ties everything together to normalize the input string
    normalize() {
        let cleanedString = this.trimSpaces();
        cleanedString = this.removeSpecialCharacters(cleanedString);
        cleanedString = this.replaceMultipleSpaces(cleanedString);
        return this.toCamelCase(cleanedString);
    }
}

// Example usage:
const inputString = " Hello! World@ This is a Test!. ";
const normalizer = new StringNormalizer(inputString);
const normalizedString = normalizer.normalize();
console.log(normalizedString); // Output: "Hello World This Is A Test"

