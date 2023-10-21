const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";

</style>
<div class="text-averages box">
<h2>Text Average</h2>
<div id="avg-word-length">
<h3>Average Word Length</h3>
<p></p>
</div>
<div id="avg-sentence-length">
<h3>Average Sentence Length</h3>
<p></p>
</div>
</div>
      `
customElements.define('text-averages',
  class extends HTMLElement {
    static get observedAttributes() {
      return ['avg-word-length', 'avg-sentence-length']
    }

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'avg-word-length') {
        this.shadowRoot.querySelector('#avg-word-length p').textContent = newValue
      }
      if (name === 'avg-sentence-length') {
        this.shadowRoot.querySelector('#avg-sentence-length p').textContent = newValue
      }
    }
  })
