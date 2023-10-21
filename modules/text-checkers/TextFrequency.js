export class TextFrequency {

  mostUsedLetters(text, topFive = 5) {
    let letters = text.replace(/[^a-z]/gi, '').toLowerCase().split('')
    let letterFrequencyList = {}

    for (let letter of letters) {
      if (letterFrequencyList[letter]) {
        letterFrequencyList[letter]++
      } else {
        letterFrequencyList[letter] = 1
      }
    }

    let sortedLetters = Object.entries(letterFrequencyList).sort((a, b) => b[1] - a[1])
    return sortedLetters.slice(0, topFive)
  }

  mostUsedWords(text) {
    let words = text.toLowerCase().split(/\W+/)
    let wordFrequencyList = {}

    for (let word of words) {
      if (!/^\d+$/.test(word) && word !== '') {
        if (wordFrequencyList[word]) {
          wordFrequencyList[word]++
        } else {
          wordFrequencyList[word] = 1
        }
      }
    }
    let sortWords = Object.entries(wordFrequencyList).sort((a, b) => b[1] - a[1])
    return sortWords.slice(0, 5)
  }
  mostUsedSymbols(text) {
    let symbols = text.match(/[.!?',]/g) || []
    let symbolFrequencyList = {}

    for (let symbol of symbols) {
      if (symbolFrequencyList[symbol]) {
        symbolFrequencyList[symbol]++
      } else {
        symbolFrequencyList[symbol] = 1
      }
    }

    if (symbols.length === 0) {
      return "No symbols found";
    }

    let sortedSymbols = Object.entries(symbolFrequencyList).sort((a, b) => b[1] - a[1])
    return sortedSymbols.slice(0, 5)
  }
  mostUsedNumbers(text) {
    let numbers = text.match(/\d/g) || []
    let numberFrequencyList = {}

    for (let number of numbers) {
      if (numberFrequencyList[number]) {
        numberFrequencyList[number]++
      } else {
        numberFrequencyList[number] = 1
      }
    }
    if (numbers.length === 0) {
      return "No numbers found";
    }

    let sortedNumbers = Object.entries(numberFrequencyList).sort((a, b) => b[1] - a[1])
    return sortedNumbers.slice(0, 5)
  }

  mostUsedPronouns(text) {
    const pronouns = [
      'i', 'me', 'my',
      'you', 'your', 'yours',
      'he', 'him', 'his',
      'she', 'her', 'hers',
      'we', 'us', 'our', 'ours',
      'they', 'them', 'their', 'theirs'
    ]

    let words = text.toLowerCase().split(/\W+/)

    let pronounFrequencyList = {}

    for (let word of words) {
      if (pronouns.includes(word)) {
        if (pronounFrequencyList[word]) {
          pronounFrequencyList[word]++
        } else {
          pronounFrequencyList[word] = 1
        }
      }
    }

    let sortedPronouns = Object.entries(pronounFrequencyList).sort((a, b) => b[1] - a[1])

    if (sortedPronouns.length === 0) {
      return "No pronouns found"
    }

    return sortedPronouns
  }
}
