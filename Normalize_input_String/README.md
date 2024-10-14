# Normalize Input String

This project implements a string normalization tool that processes a given string by removing extra spaces, special characters, and converting the string to camel case format.

##Table of Contents
- Problem Statement
- Input
- Output
- Example
- Project Structure
- Setup Instructions
- Prerequisites
- Installation
- How to Run the Code
- Testing Instructions
- Code Explanation
 - Methods Breakdown

##Problem Statement
The goal of this program is to normalize a given input string through the following steps:

1. Trim extra spaces: Remove any extra spaces from the beginning and end of the string.
2. Remove special characters: Remove special characters and punctuation, leaving only alphanumeric characters and spaces.
3. Replace multiple spaces: Replace multiple spaces between words with a single space.
4. Camel case conversion: Convert the cleaned string to camel case, where the first letter of each word is capitalized, and all other
   letters are in lowercase.
   
##Input
A single string may contain uppercase letters, extra spaces, and special characters.

##Output
A single normalized string in a camel case format.

##Example

-Input:
"  Hello! World@ This is a Test!.  "

-Output:
"Hello World This Is A Test"

##Project Structure

├── src/
│   └── StringNormalizer.mjs        # Main file containing the string normalization logic
├── test/
│   └── StringNormalizerTest.mjs    # Unit tests for the normalization logic
├── README.md                       # Project documentation (this file)
└── package.json                    # Project metadata and dependencies

##Setup Instructions
##Prerequisites
Ensure you have the following installed:

-Node.js (v12 or higher)
-npm (comes with Node.js)

##Installation
1. Clone the repository:

git clone https://github.com/Summi51/Kritter_Backend_Coding_Solution.git

2. Navigate to the project directory:

cd Normalize_Input_String

3. Install the dependencies:

npm install

4. How to Run the Code
To execute the normalization logic, use the following command:

node src/StringNormalizer.mjs

##Testing Instructions
Unit tests for the string normalization functionality are written using Mocha and Chai. To run the tests:

1. Run the tests with:

npm test
This will run the test cases defined in the test/ folder, ensuring each function works as expected.

##Code Explanation
The core logic is encapsulated in the StringNormalizer class, with the following key methods:

##Methods Breakdown
1. trimSpaces():
-Removes any extra spaces from the beginning and end of the string.
-Time Complexity: O(n), where n is the length of the string.
-Space Complexity: O(1).

2. removeSpecialCharacters(str):
-Removes special characters and punctuation, leaving only alphanumeric characters and spaces.
-Time Complexity: O(n)
-Space Complexity: O(1)

3. replaceMultipleSpaces(str):
-Replaces multiple spaces between words with a single space.
-Time Complexity: O(n)
-Space Complexity: O(1)

4. toCamelCase(str):
-Converts the cleaned string to camel case format.
-Time Complexity: O(n)
-Space Complexity: O(n)

5. normalize():
-Ties all the above methods together to process the input string and produce the final normalized output.
-Time Complexity: O(n)
-Space Complexity: O(n)


