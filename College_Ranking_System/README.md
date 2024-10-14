# Advanced College Ranking System
This project implements a college ranking system that filters and ranks a list of colleges based on user preferences such as location, fees, and weights assigned to the ranking and fees.

## Table of Contents
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
   
## Problem Statement
The goal of this program is to rank colleges based on user preferences. The user can specify:

1. A preferred location.
2. A maximum fee they are willing to pay.
3. Weights for college ranking and fees.
   
Colleges that match the location and fee constraints will be assigned a score based on their ranking and fees. The colleges are then sorted by their scores, and the resulting list is displayed in non-decreasing order (lower scores are better).

## Steps:
1. Filter Colleges: Based on the preferred location and maximum fees.
2. Score Calculation: Use the following formula to score colleges:

**Score = (Ranking × rankingWeight) + (Fees / maxFees × feesWeight)**

3. Sort Colleges: Sort the filtered colleges by their scores in ascending order.
   
## Input
1. A list of colleges, each with the following attributes:
- name (string): The name of the college.
- location (string): The location of the college.
- fees (integer): The fee for attending the college.
- ranking (integer): The current ranking of the college.
2. User preferences:
- preferred_location (string): The preferred location of the colleges.
- max_fees (integer): The maximum fee the user is willing to pay.
- ranking_weight (integer): The weight given to the college ranking.
- fees_weight (integer): The weight given to the college fees.
  
## Output
A list of colleges that meet the user's preferences, sorted by their calculated scores in non-decreasing order.

## Example
## Colleges Data:
Name	Location	Fees	Ranking
College A	New York	20000	1
College B	California	15000	2
College C	New York	25000	3
College D	New York	10000	4

**Input:**
- preferred_location = "New York"
- max_fees = 20000
- ranking_weight = 2
- fees_weight = 1
  
**Output:**

Name: College A, Location: New York, Fees: 20000, Ranking: 1, Score: 4.00
Name: College D, Location: New York, Fees: 10000, Ranking: 4, Score: 9.00

## Project Structure

├── src/
│   └── RankingSystemSolution.js       # Main logic for filtering, scoring, and sorting colleges
├── test/
│   └── RankingSystemTest.js           # Unit tests for the ranking system
├── README.md                          # Project documentation (this file)
└── package.json                       # Project metadata and dependencies

## Setup Instructions
- Prerequisites
Ensure you have the following installed:

1. Node.js (v12 or higher)
2. npm (comes with Node.js)
   
- Installation
1. Clone the repository:

git clone https://github.com/Summi51/Kritter_Backend_Coding_Solution.git

2. Navigate to the project directory:

cd College_Ranking_System

3. Install the dependencies:

npm install

## How to Run the Code
To execute the college ranking logic, use the following command:

**npm start**

## Testing Instructions
Unit tests for the college ranking system are written using Mocha and Chai. To run the tests:

**npm test**

This will run the test cases defined in the test/ folder and verify that the ranking system behaves as expected.

## Code Explanation
The core logic is encapsulated in the CollegeRankingSystem class, with the following key methods:

## Methods Breakdown
1. rankColleges(preferredLocation, maxFees, rankingWeight, feesWeight):

- Filters the list of colleges based on the user's preferred location and maximum fees.
- Assigns a score to each college using the formula:
  
**Score = (Ranking × rankingWeight) + (Fees / maxFees × feesWeight)**

- Sorts the colleges by their calculated scores.
- Time Complexity: O(n log n) for sorting, where n is the number of colleges.
  
2. calculateScore(college, maxFees, rankingWeight, feesWeight):

- Calculates the score for a given college using the provided weights for ranking and fees.
- Time Complexity: O(1).
