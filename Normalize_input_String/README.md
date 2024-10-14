# Normalize Input String

## Problem Statement

The goal of this program is to normalize a given input string through a series of steps. Normalization includes:
1. Removing any extra spaces from the beginning and end of the string.
2. Removing any special characters and punctuation, leaving only alphanumeric characters and spaces.
3. Replacing multiple spaces between words with a single space.
4. Converting the cleaned string to camel case (i.e., the first letter of each word is capitalized, and all other letters are in lowercase).

## Input

A single string may contain uppercase letters, extra spaces, and special characters.

## Output

A single normalized string in camel case.

## Example

**Input**:  
```plaintext
" Hello! World@ This is a Test!. "

Output:
"Hello World This Is A Test"

Project Structure
├── src/
│   ├── StringNormalizer.mjs
├── test/
│   └── StringNormalizerTest.mjs
├── README.md
└── package.json

Setup Instructions

Prerequisites
Node.js 
npm (comes with Node.js)

Installation

1. Clone the repository:
git clone https://github.com/Summi51/Kritter_Backend_Coding_Solution.git

2. Navigate to the project directory:
cd Normalize_Input_String

3. Install the dependencies
npm install

How to Run the Code
node StringNormalizerSolution.mjs

Testing Instructions
npm test

Code Explanation

StringNormalizer Class
Constructor: Initializes the class with the input string.

trimSpaces(): Removes extra spaces from the beginning and end.

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(1).
removeSpecialCharacters(str): Removes special characters and punctuation.

Time Complexity: O(n).
Space Complexity: O(1).
replaceMultipleSpaces(str): Replaces multiple spaces with a single space.

Time Complexity: O(n).
Space Complexity: O(1).
toCamelCase(str): Converts the cleaned string to camel case.

Time Complexity: O(n).
Space Complexity: O(n).
normalize(): Ties all methods together to produce the final normalized string.

Time Complexity: O(n).
Space Complexity: O(n).
Testing
The test/ directory contains unit tests written using Mocha and Chai.
Each test case verifies a specific method of the StringNormalizer class to ensure it functions correctly.

Submission Checklist
 All classes and methods are modular, adhering to clean code practices.
 Class names, method names, and variables follow appropriate naming conventions.
 Time and space complexity for each method is mentioned in code comments.
 README.md file is included with clear setup, run instructions, and example commands.
 All dependencies are clearly mentioned in the README.md.
 Tests (if any) are included, and instructions on how to run the tests are in the README.md.
 Code is committed to the GitHub repository with clear commit history.


This version consolidates all the information into a single page while maintaining clarity and organization. Feel free to adjust any details as needed!






