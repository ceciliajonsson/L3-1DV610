export class TextCounter {

    countCharactersIncSpaces(text) {
        let letters = text.split('')
        return letters.length
    }
    countCharactersExcSpaces(text) {
        let letters = text.split('')
        let count = 0;
        for (let letter of letters) {
            if (letter.match(/^[a-zA-Z0-9.!?,']/)) {
                count++
            }
        }
        return count
    }

    countLetters(text) {
        let letters = text.split('')
        let count = 0
        for (let letter of letters) {
            if (letter.match(/[a-zA-Z]/)) {
                count++
            }
        }
        return count
    }
    countWords(text) {
        return text.split(' ').length
    }
    countSentences(text) {
        let sentences = text.split(/[.!?]/)
        sentences = sentences.filter(sentence => sentence.trim() !== '')
        if (!/[.!?]$/.test(text)) {
            return sentences.length - 1
        }
        return sentences.length
    }
    countParagraphs(text) {
        let paragraphs = text.split(/\n/)
        return paragraphs.length
    }
    countVowels(text) {
        let vowels = text.match(/[aeiou]/gi)
        return vowels ? vowels.length : 0
    }

    countConsonants(text) {
        let consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
        return consonants ? consonants.length : 0
    }


}
