import '../text-average'
import '../text-counter'
import '../text-frequencies'
import '../text-manipulators'
import { TextInputValidator } from '../../../../modules/text-checkers/TextInputValidator.js'
import { TextAverage } from '../../../../modules/text-checkers/TextAverage.js'
import { TextCounter } from '../../../../modules/text-checkers/TextCounter.js'
import { TextFrequency } from '../../../../modules/text-checkers/TextFrequency.js'

const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h1>Text Checker App</h1>

<div id="container">
  <form>
  <textarea name="text-input" id="text-input" placeholder="Enter your text here..."></textarea>
  <button id="submit-button"><p>Submit</p></button>
  </form>
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
          this.#calculateFrequencies(providedText)
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
      const textAverageElement = document.createElement('text-average')
      textAverageElement.setAttribute('avg-word-length', textAverage.averageWordLength(text))
      textAverageElement.setAttribute('avg-sentence-length', textAverage.averageSentenceLength(text))
      result.appendChild(textAverageElement)
    }

    #calculateTextCounter(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textCounter = new TextCounter()
      const textCounterElement = document.createElement('text-counter')
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

    #calculateFrequencies(text) {
      const result = this.shadowRoot.querySelector('#result')


    }
  })
