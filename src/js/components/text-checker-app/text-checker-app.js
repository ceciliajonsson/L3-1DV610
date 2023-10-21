import '../text-averages'
import '../text-counters'
import '../text-frequencies'
import '../text-reversers'
import '../text-replacers'
import { TextInputValidator } from '../../../../modules/text-checkers/TextInputValidator.js'
import { TextAverage } from '../../../../modules/text-checkers/TextAverage.js'
import { TextCounter } from '../../../../modules/text-checkers/TextCounter.js'
import { TextFrequency } from '../../../../modules/text-checkers/TextFrequency.js'
import { TextReverser } from '../../../../modules/text-checkers/TextReverser.js'
import { TextReplacer } from '../../../../modules/text-checkers/TextReplacer.js'

const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";

</style>
<div class="container">
  <div class="start-area">
<h1>Text Checker App</h1>

  <form id="main-form">
  <textarea name="text-input" id="text-input" placeholder="Enter your text here..."></textarea>
  <button id="submit-button"><p>Submit</p></button>
  </form>
</div>
  <div id="result"></div>
</div>   

      `

customElements.define('text-checker-app',

  class extends HTMLElement {
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      const submitButton = this.shadowRoot.querySelector('#submit-button')

      submitButton.addEventListener('click', (event) => {
        try {
          event.preventDefault()
          this.#clearResult()
          let providedText = this.#validateTextInput()
          this.#calculateTextAverage(providedText)
          this.#calculateTextCounter(providedText)
          this.#calculateTextFrequency(providedText)
          this.#calculateTextReverser(providedText)
          this.#calculateTextReplacer(providedText)
        }
        catch (error) {
          alert(error)
        }

      })
    }
    #clearResult() {
      let resultElement = this.shadowRoot.querySelector('#result')
      while (resultElement && resultElement.firstChild) {
        resultElement.removeChild(resultElement.firstChild)
      }
    }
    #validateTextInput() {
      const textInput = new TextInputValidator(this.shadowRoot.querySelector('#text-input').value)
      let providedText = textInput.getValidatedText()

      return providedText
    }
    #calculateTextAverage(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textAverage = new TextAverage()
      const textAverageElement = document.createElement('text-averages')
      textAverageElement.setAttribute('avg-word-length', textAverage.averageWordLength(text))
      textAverageElement.setAttribute('avg-sentence-length', textAverage.averageSentenceLength(text))
      result.appendChild(textAverageElement)
    }

    #calculateTextCounter(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textCounter = new TextCounter()
      const textCounterElement = document.createElement('text-counters')
      textCounterElement.setAttribute('count-character-inc-spaces', textCounter.countCharactersIncSpaces(text))
      textCounterElement.setAttribute('count-character-exc-spaces', textCounter.countCharactersExcSpaces(text))
      textCounterElement.setAttribute('count-letters', textCounter.countLetters(text))
      textCounterElement.setAttribute('count-words', textCounter.countWords(text))
      textCounterElement.setAttribute('count-sentences', textCounter.countSentences(text))
      textCounterElement.setAttribute('count-paragraphs', textCounter.countParagraphs(text))
      textCounterElement.setAttribute('count-vowels', textCounter.countVowels(text))
      textCounterElement.setAttribute('count-consonants', textCounter.countConsonants(text))
      result.appendChild(textCounterElement)
    }

    #calculateTextFrequency(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textFrequency = new TextFrequency()
      const textFrequencyElement = document.createElement('text-frequencies')
      textFrequencyElement.setAttribute('most-used-letters', textFrequency.mostUsedLetters(text))
      textFrequencyElement.setAttribute('most-used-words', textFrequency.mostUsedWords(text))
      textFrequencyElement.setAttribute('most-used-symbols', textFrequency.mostUsedSymbols(text))
      textFrequencyElement.setAttribute('most-used-numbers', textFrequency.mostUsedNumbers(text))
      textFrequencyElement.setAttribute('most-used-pronouns', textFrequency.mostUsedPronouns(text))
      result.appendChild(textFrequencyElement)
    }

    #calculateTextReverser(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textReverser = new TextReverser()
      const textReverserElement = document.createElement('text-reversers')
      textReverserElement.setAttribute('reverse-text', textReverser.reverseText(text))
      textReverserElement.setAttribute('reverse-sentences', textReverser.reverseSentences(text))
      result.appendChild(textReverserElement)
    }

    #calculateTextReplacer(providedText) {
      const result = this.shadowRoot.querySelector('#result')

      const textReplacerElement = document.createElement('text-replacers')
      result.appendChild(textReplacerElement)

      customElements.whenDefined('text-replacers').then(() => {
        const replaceWordButton = textReplacerElement.shadowRoot.querySelector('#replace-word-button')
        const replaceSymbolButton = textReplacerElement.shadowRoot.querySelector('#replace-symbol-button')
        const replaceNumberButton = textReplacerElement.shadowRoot.querySelector('#replace-number-button')

        const textReplacer = new TextReplacer()

        replaceWordButton.addEventListener('click', () => {
          const wordToReplace = textReplacerElement.shadowRoot.querySelector('#word-to-replace').value
          const wordReplaceWith = textReplacerElement.shadowRoot.querySelector('#replace-word-with').value

          try {
            const replacedText = textReplacer.replaceWord(providedText, wordToReplace, wordReplaceWith)
            textReplacerElement.shadowRoot.querySelector('#replace-word p').textContent = replacedText
          } catch (e) {
            textReplacerElement.shadowRoot.querySelector('#replace-word p').textContent = e.message
          }
        })

        replaceSymbolButton.addEventListener('click', () => {
          const symbolToReplace = textReplacerElement.shadowRoot.querySelector('#symbol-to-replace').value
          const symbolReplaceWith = textReplacerElement.shadowRoot.querySelector('#replace-symbol-with').value

          try {
            const replacedText = textReplacer.replaceSymbol(providedText, symbolToReplace, symbolReplaceWith)
            textReplacerElement.shadowRoot.querySelector('#replace-symbol p').textContent = replacedText
          } catch (e) {
            textReplacerElement.shadowRoot.querySelector('#replace-symbol p').textContent = e.message
          }
        })

        replaceNumberButton.addEventListener('click', () => {
          const numberToReplace = parseFloat(textReplacerElement.shadowRoot.querySelector('#number-to-replace').value);
          const numberReplaceWith = parseFloat(textReplacerElement.shadowRoot.querySelector('#replace-number-with').value);

          try {
            const replacedText = textReplacer.replaceNumber(providedText, numberToReplace, numberReplaceWith)
            textReplacerElement.shadowRoot.querySelector('#replace-number p').textContent = replacedText
          } catch (e) {
            textReplacerElement.shadowRoot.querySelector('#replace-number p').textContent = e.message
          }
        })
      })
    }
  })
