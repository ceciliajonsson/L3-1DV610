import { TextCounter } from '../modules/text-checkers/TextCounter'

describe('TextCounter', () => {

    const sampleText = 'The quick brown fox jumped over the lazy dog.'
    let textCounter;

    beforeEach(() => {
        textCounter = new TextCounter();
    });

    test('countCharactersIncSpaces', () => {
        expect(textCounter.countCharactersIncSpaces(sampleText)).toBe(45)
    })

    test('countCharactersExcSpaces', () => { 
        expect(textCounter.countCharactersExcSpaces(sampleText)).toBe(37)
    })

    test('countLetters', () => {
        expect(textCounter.countLetters(sampleText)).toBe(36)
    })

    test('countWords', () => {
        expect(textCounter.countWords(sampleText)).toBe(9)
    })

    test('countSentences', () => {
        expect(textCounter.countSentences(sampleText)).toBe(2)
    })

    test('countParagraphs', () => {
        expect(textCounter.countParagraphs(sampleText)).toBe(1)
    })

    test('countVowels', () => { 
        expect(textCounter.countVowels(sampleText)).toBe(12)
    })

    test('countConsonants', () => {
        expect(textCounter.countConsonants(sampleText)).toBe(24)
    })

})
