import '../text-averages'
import '../text-counters'
import '../text-frequencies'
import '../text-manipulators'

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
  <div id="menu-holder">
    <button id="text-averages-button" class="menu-icon"><p>Text Averages</p></button>
    <button id="text-counters-button" class="menu-icon"><p>Text Counters</p></button>
    <button id="text-frequencies-button" class="menu-icon"><p>Text Frequencies</p></button>
    <button id="text-manipulators-button" class="menu-icon"><p>Text Manipulators</p></button>
  </div>
  <div id="starting-point">
  </div>
</div>
      `

customElements.define('text-checker-app',

  class extends HTMLElement {
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      const textAveragesButton = this.shadowRoot.querySelector('#text-averages-button')
      // const textCountersButton = this.shadowRoot.querySelector('#text-counters-button')
      // const texFrequenciesButton = this.shadowRoot.querySelector('#text-frequencies-button')
      // const textManipulatorsButton = this.shadowRoot.querySelector('text-manipulators-button')



      textAveragesButton.addEventListener('click', (event) => {
        const textAveragesComponent = document.createElement('text-averages')

      })

    }
  })
