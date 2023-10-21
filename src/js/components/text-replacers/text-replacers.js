const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h2>Text Replacers</h2>


<div id="replace-word">
<h3>Replace Word</h3>
<input type="text" placeholder="Word to replace" id="word-to-replace">
<input type="text" placeholder="Replace with" id="replace-word-with">
<button id="replace-word-button">Replace</button>
<p></p>
</div>

<div id="replace-symbol">
<h3>Replace Symbol</h3>
<input type="text" placeholder="Symbol to replace" id="symbol-to-replace">
<input type="text" placeholder="Replace with" id="replace-symbol-with">
<button id="replace-symbol-button">Replace</button>
<p></p>
</div>

<div id="replace-number">
<h3>Replace Number</h3>
<input type="text" placeholder="Number to replace" id="number-to-replace">
<input type="text" placeholder="Replace with" id="replace-number-with">
<button id="replace-number-button">Replace</button>
<p></p>
</div>
      `

customElements.define('text-replacers',
    class extends HTMLElement {
        static get observedAttributes() {
            return ['replace-word', 'replace-symbol', 'replace-number']
        }

        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'replace-word') {
                this.shadowRoot.querySelector('#replace-word p').textContent = newValue
            }
            if (name === 'replace-symbol') {
                this.shadowRoot.querySelector('#replace-symbol p').textContent = newValue
            }
            if (name === 'replace-number') {
                this.shadowRoot.querySelector('#replace-number p').textContent = newValue
            }
        }
    }
)
