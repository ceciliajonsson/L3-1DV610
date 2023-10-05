export class TextAverages {

    averageWordLength(text) {
        let words = text.toLowerCase().split(/\s+/)
        let totalLetterCount = 0

        for (let word of words) {
            let lettersInWord = word.replace(/[^a-zA-Z]/g, '')
            totalLetterCount += lettersInWord.length
        }

        return Math.round(totalLetterCount * 100 / words.length) / 100
    }

    averageSentenceLength(text) {
        let sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0)
        let totalWordCount = 0

        for (let sentence of sentences) {
            let wordsInSentence = sentence.trim().split(/\s+/)
            totalWordCount += wordsInSentence.length
        }

        let averageSentenceWords = totalWordCount / sentences.length
        return Math.round(averageSentenceWords * 100) / 100 
    }
}

