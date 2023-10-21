export class TextReplacer {

    replaceWord(text, wordToReplace, wordToReplaceWith) {
        if (!isNaN(wordToReplace) || !isNaN(wordToReplaceWith)) {
            throw new TypeError("All arguments must be of type string.")
        }

        if (wordToReplace.length === 0 || wordToReplaceWith.length === 0) {
            throw new Error("Both wordToReplace and wordToReplaceWith must be non-empty strings.")
        }
        return text.replace(new RegExp('\\b' + wordToReplace + '\\b', 'gi'), wordToReplaceWith)

    }
    replaceSymbol(text, symbolToReplace, symbolToReplaceWith) {
        const allowedSymbols = ['.', ',', '!', '?', "'", '(', ')', '-']

        if (!allowedSymbols.includes(symbolToReplace)) {
            throw new Error(`Invalid symbol: ${symbolToReplace}. Allowed symbols are: ${allowedSymbols.join(', ')}`)
        }

        return text.replace(new RegExp('\\' + symbolToReplace, 'g'), symbolToReplaceWith)
    }

    replaceNumber(text, numberToReplace, numberToReplaceWith) {
        let parsedNumberToReplace = parseFloat(numberToReplace);
        let parsedNumberToReplaceWith = parseFloat(numberToReplaceWith);

        if (isNaN(parsedNumberToReplace) || isNaN(parsedNumberToReplaceWith)) {
            throw new Error("Both arguments must be of type number.")
        }

        return text.replace(new RegExp(parsedNumberToReplace, 'g'), parsedNumberToReplaceWith.toString())
    }

}