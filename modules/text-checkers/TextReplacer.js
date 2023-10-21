export class TextReplacer {

    replaceWord(text, wordToReplace, wordToReplaceWith) {
        if (typeof text !== 'string' || typeof wordToReplace !== 'string' || typeof wordToReplaceWith !== 'string') {
            throw new TypeError("All arguments must be of type string.")
        }

        if (wordToReplace.length === 0 || wordToReplaceWith.length === 0) {
            throw new Error("Both wordToReplace and wordToReplaceWith must be non-empty strings.")
        }
        return text.replace(new RegExp('\\b' + wordToReplace + '\\b', 'gi'), wordToReplaceWith)

    }
    replaceSymbol(text, symbolToReplace, symbolToReplaceWith) {
        const allowedSymbols = ['.', ',', '!', '?', "'"]

        if (!allowedSymbols.includes(symbolToReplace)) {
            throw new Error(`Invalid symbol: ${symbolToReplace}. Allowed symbols are: ${allowedSymbols.join(', ')}`)
        }

        return text.replace(new RegExp('\\' + symbolToReplace, 'g'), symbolToReplaceWith)
    }

    replaceNumber(text, numberToReplace, numberToReplaceWith) {
        if (typeof numberToReplace !== 'number' || typeof numberToReplaceWith !== 'number') {
            throw new TypeError("Both arguments must be of type number.")
        }

        return text.replace(new RegExp(numberToReplace, 'g'), numberToReplaceWith)
    }

}