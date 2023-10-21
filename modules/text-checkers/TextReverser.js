export class TextReverser {

    reverseText(text) {
        return text.split('').reverse().join('')
    }

    reverseSentences(text) {

        let sentences = text.match(/[^.!?]+[.!?]/g) || []
        sentences = sentences.reverse()

        if (text.match(/[^.!?]+[.!?]/g) === null) {
            return 'Couldn\'t find any sentences in the text.'
        }

        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].replace(' ,', ',')

            if (i < sentences.length - 1) {
                sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1)
            }
        }
        let reversedSentences = sentences.join(' ').trim();
        return reversedSentences.charAt(0).toUpperCase() + reversedSentences.slice(1)
    }

}