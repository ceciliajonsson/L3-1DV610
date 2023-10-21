import { TextAverage } from '../modules/text-checkers/TextAverage.js'

describe('TextAverage', () => {
    let textAverage

    beforeEach(() => {
        textAverage = new TextAverage()
    })

    describe('averageWordLength', () => {
        it('returns the average word length of a text', () => {
            let text = 'The quick brown fox jumped over the lazy dog.'
            let averageWordLength = textAverage.averageWordLength(text)
            expect(averageWordLength).toEqual(4)
        })
    })

    describe('averageSentenceLength', () => {
        it('returns the average sentence length of a text', () => {
            let text = 'The quick brown fox jumped over the lazy dog. The dog was not amused.'
            let averageSentenceLength = textAverage.averageSentenceLength(text)
            expect(averageSentenceLength).toEqual(7)
        })
    })
})

