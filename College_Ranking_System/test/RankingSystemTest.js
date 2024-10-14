// test/RankingSystemTest.js

import { expect } from 'chai';
import { College, CollegeRankingSystem } from '../src/RankingSystemSolution.js';

describe('CollegeRankingSystem', () => {
    it('should rank colleges based on user preferences', () => {
        const colleges = [
            new College("College A", "New York", 20000, 1),
            new College("College B", "California", 15000, 2),
            new College("College C", "New York", 25000, 3),
            new College("College D", "New York", 10000, 4)
        ];

        const rankingSystem = new CollegeRankingSystem(colleges);

        const preferredLocation = "New York";
        const maxFees = 20000;
        const rankingWeight = 2;
        const feesWeight = 1;

        const rankedColleges = rankingSystem.rankColleges(preferredLocation, maxFees, rankingWeight, feesWeight);

        expect(rankedColleges).to.be.an('array');
        expect(rankedColleges.length).to.equal(2);
        expect(rankedColleges[0].name).to.equal('College A'); // Corrected expectation
        expect(rankedColleges[1].name).to.equal('College D'); // Corrected expectation
    });
});
