import '../text-averages'
import '../text-counters'
import '../text-frequencies'
import '../text-manipulators'
import { TextInputValidator } from '../../../../modules/text-checkers/TextInputValidator.js'
import { TextAverages } from '../../../../modules/text-checkers/TextAverages.js'
import { TextCounter } from '../../../../modules/text-checkers/TextCounter'

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
          this.#calculateTextAverages(providedText)
          this.#calculateTextCounters(providedText)
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
    #calculateTextAverages(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textAverages = new TextAverages()
      const textAveragesElement = document.createElement('text-averages')
      textAveragesElement.setAttribute('avg-word-length', textAverages.averageWordLength(text))
      textAveragesElement.setAttribute('avg-sentence-length', textAverages.averageSentenceLength(text))
      result.appendChild(textAveragesElement)

    }
    #calculateTextCounters(text) {
      const result = this.shadowRoot.querySelector('#result')

      const textCounters = new TextCounter()
      const textCountersElement = document.createElement('text-counters')
      textCountersElement.setAttribute('count-character-inc-spaces', textCounters.countCharactersIncSpaces(text))
      textCountersElement.setAttribute('count-character-exc-spaces', textCounters.countCharactersExcSpaces(text))
      textCountersElement.setAttribute('count-letters', textCounters.countLetters(text))
      textCountersElement.setAttribute('count-words', textCounters.countWords(text))
      textCountersElement.setAttribute('count-sentences', textCounters.countSentences(text))
      textCountersElement.setAttribute('count-paragraphs', textCounters.countParagraphs(text))
      textCountersElement.setAttribute('count-vowels', textCounters.countVowels(text))
      textCountersElement.setAttribute('count-consonants', textCounters.countConsonants(text))
      result.appendChild(textCountersElement)

    }
  })
