class Chatbot {
    constructor(questionAnswerPairs) {
        this.questionAnswerPairs = questionAnswerPairs;
    }

    // Method to tokenize a string into an array of lowercase words
    tokenize(sentence) {
        return sentence
            .toLowerCase()
            .replace(/[^a-zA-Z\s]/g, '')  
            .split(/\s+/);  
    }

    // Method to calculate similarity score by comparing word matches
    calculateSimilarity(userTokens, questionTokens) {
        const userSet = new Set(userTokens);
        const questionSet = new Set(questionTokens);
        let matchCount = 0;
        userSet.forEach(token => {
            if (questionSet.has(token)) {
                matchCount++;
            }
        });
        return matchCount;
    }

    // Method to find the closest matching question based on word similarity
    findClosestMatchingQuestion(userQuestion) {
        const userTokens = this.tokenize(userQuestion);
        let bestMatch = null;
        let bestScore = 0;
        let bestTokenMatchRatio = 0;

        // Compare user question with each predefined question
        this.questionAnswerPairs.forEach(pair => {
            const questionTokens = this.tokenize(pair.question);
            const score = this.calculateSimilarity(userTokens, questionTokens);
            const tokenMatchRatio = score / questionTokens.length;  

            if (score > bestScore && tokenMatchRatio > 0.5) {  
                bestScore = score;
                bestMatch = pair;
                bestTokenMatchRatio = tokenMatchRatio;
            }
        });

        // Return default response if no meaningful match is found
        if (!bestMatch || bestTokenMatchRatio <= 0.5) {
            return "I'm sorry, I don't understand the question.";
        }

        return bestMatch ? bestMatch.answer : "I'm sorry, I don't understand the question.";
    }

    // Method to get the chatbot's response based on user input
    getResponse(userQuestion) {
        return this.findClosestMatchingQuestion(userQuestion);
    }
}

// Example predefined question-answer pairs
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

const chatbot = new Chatbot(questionAnswerPairs);

// Example user input
const userInput = "What's the weather like today?";
const response = chatbot.getResponse(userInput);
console.log(response);  // Output: "The weather is sunny."
//=========
const userInput1 = "What is your name?";
const response1 = chatbot.getResponse(userInput1);
console.log(response1);  // Output: "My name is Chatbot."
//=========
const userInput2 = "How can I help you?";
const response2 = chatbot.getResponse(userInput2);
console.log(response2);  // Output:"I can assist you with your queries."
//=========
const userInput3 = "";
const response3 = chatbot.getResponse(userInput3);
console.log(response3);  // Output:"I'm sorry, I don't understand the question."


export default Chatbot;


