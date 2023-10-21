const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h2>Text Average</h2>
<div id="avg-word-length">
<h3>Average Word Length</h3>
<p></p>
</div>
<div id="avg-sentence-length">
<h3>Average Sentence Length</h3>
<p></p>
</div>
      `
customElements.define('text-average',
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
