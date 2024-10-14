export class College {
    constructor(name, location, fees, ranking) {
        this.name = name;
        this.location = location;
        this.fees = fees;
        this.ranking = ranking;
        this.score = 0; 
    }
}

export class CollegeRankingSystem {
    constructor(colleges) {
        this.colleges = colleges;
    }

    // Method to filter, score, and sort colleges based on user preferences
    rankColleges(preferredLocation, maxFees, rankingWeight, feesWeight) {
        const filteredColleges = this.colleges.filter(college => {
            return college.location === preferredLocation && college.fees <= maxFees;
        });

        filteredColleges.forEach(college => {
            college.score = this.calculateScore(college, maxFees, rankingWeight, feesWeight);
        });

        filteredColleges.sort((a, b) => a.score - b.score);

        return filteredColleges;
    }

    // Helper function to calculate the score for each college
    calculateScore(college, maxFees, rankingWeight, feesWeight) {
        const rankingComponent = college.ranking * rankingWeight;
        const feesComponent = (college.fees / maxFees) * feesWeight;
        const score = rankingComponent + feesComponent;

        return Math.round(score);
    }
}

// Example List of Colleges
const colleges = [
    new College("College A", "New York", 20000, 1),
    new College("College B", "California", 15000, 2),
    new College("College C", "New York", 25000, 3),
    new College("College D", "New York", 10000, 4)
];

const collegeRankingSystem = new CollegeRankingSystem(colleges);

const preferredLocation = "New York";
const maxFees = 20000;
const rankingWeight = 2;
const feesWeight = 1;

// Get the ranked list of colleges based on the user's preferences
const rankedColleges = collegeRankingSystem.rankColleges(preferredLocation, maxFees, rankingWeight, feesWeight);

// Output the sorted list of colleges with their scores
rankedColleges.forEach(college => {
    console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score}`);
});




