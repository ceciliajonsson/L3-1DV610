import { TextAverages } from "../../../../modules/text-checkers/TextAverages.js"

const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h1>Text Averages App</h1>
      `

customElements.define('text-averages',

  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

        console.log('Hello from text-averages')

    }
  })
