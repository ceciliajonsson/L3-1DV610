import '../text-averages'
import '../text-counters'
import '../text-frequencies'
import '../text-manipulators'
import { TextInputValidator } from '../../../../modules/text-checkers/TextInputValidator.js'
import { TextAverages } from '../../../../modules/text-checkers/TextAverages.js'

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
        }
        catch (error) {
          alert(error)
        }

      })
    }
    #clearResult() {
      if (this.shadowRoot.querySelector('#result').firstChild) {
        this.shadowRoot.querySelector('#result').removeChild(this.shadowRoot.querySelector('#result').firstChild)
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
  })
