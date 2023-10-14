import '../text-averages'
import '../text-counters'
import '../text-frequencies'
import '../text-manipulators'
import {TextInputValidator} from '../../../../modules/text-checkers/TextInputValidator.js'

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
  </div>
</div>   

      `

customElements.define('text-checker-app',

  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      const submitButton = this.shadowRoot.querySelector('#submit-button')

      submitButton.addEventListener('click', (event) => {
        event.preventDefault()

        const textInput = new TextInputValidator(this.shadowRoot.querySelector('#text-input').value)
        let providedText = textInput.getValidatedText()

        // ^ REMEMBER TO CATCH ERRORS HERE

        console.log(providedText)
        
      })
    }
  })
