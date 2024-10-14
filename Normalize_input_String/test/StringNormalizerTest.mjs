import { expect } from 'chai'; 
import StringNormalizer from '../src/StringNormalizerSolution.mjs'; 

describe('StringNormalizer Class', () => {
    it('should remove extra spaces from the beginning and end of the string', () => {
        const normalizer = new StringNormalizer('  Hello World  ');
        const trimmedString = normalizer.trimSpaces();
        expect(trimmedString).to.equal('Hello World');
    });

    it('should remove special characters and punctuation', () => {
        const normalizer = new StringNormalizer('Hello, World!');
        const cleanedString = normalizer.removeSpecialCharacters(normalizer.inputString);
        expect(cleanedString).to.equal('Hello World');
    });

    it('should replace multiple spaces with a single space', () => {
        const normalizer = new StringNormalizer('Hello   World   Test');
        const spacedString = normalizer.replaceMultipleSpaces(normalizer.inputString);
        expect(spacedString).to.equal('Hello World Test');
    });

    it('should convert the string to camel case', () => {
        const normalizer = new StringNormalizer('hello world test');
        const camelCasedString = normalizer.toCamelCase(normalizer.inputString);
        expect(camelCasedString).to.equal('Hello World Test');
    });

    it('should normalize the input string by applying all methods', () => {
        const normalizer = new StringNormalizer('  Hello!  World@ This   is a  Test!.  ');
        const normalizedString = normalizer.normalize();
        expect(normalizedString).to.equal('Hello World This Is A Test');
    });
});
