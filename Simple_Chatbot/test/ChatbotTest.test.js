import { expect } from 'chai';
import Chatbot from '../src/ChatbotSolution.js';

// Example predefined question-answer pairs
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

describe('Chatbot', () => {
    let chatbot;

    beforeEach(() => {
        chatbot = new Chatbot(questionAnswerPairs);
    });

    it('should return the correct answer for "What is your name?"', () => {
        const response = chatbot.getResponse("What is your name?");
        expect(response).to.equal("My name is Chatbot.");
    });

    it('should return the correct answer for "How can I help you?"', () => {
        const response = chatbot.getResponse("How can I help you?");
        expect(response).to.equal("I can assist you with your queries.");
    });

    it('should return the correct answer for a weather-related question', () => {
        const response = chatbot.getResponse("What's the weather like today?");
        expect(response).to.equal("The weather is sunny.");
    });

    it('should return a default response for an unknown question', () => {
        const response = chatbot.getResponse("Tell me about the universe.");
        expect(response).to.equal("I'm sorry, I don't understand the question.");
    });

    it('should return a default response for an empty input', () => {
        const response = chatbot.getResponse("");
        expect(response).to.equal("I'm sorry, I don't understand the question.");
    });
});
