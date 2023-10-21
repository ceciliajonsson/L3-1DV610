const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h2>Text Frequencies</h2>

<div id="most-used-letters">
<h3>Most Used Letters</h3>
<p></p>
</div>

<div id="most-used-words">
<h3>Most Used Words</h3>
<p></p>
</div>

<div id="most-used-symbols">
<h3>Most Used Symbols</h3>
<p></p>
</div>

<div id="most-used-numbers">
<h3>Most Used Numbers</h3>
<p></p>
</div>

<div id="most-used-pronouns">
<h3>Most Used Pronouns</h3>
<p></p>
</div>
      `
customElements.define('text-frequencies',
    class extends HTMLElement {
        static get observedAttributes() {
            return ['most-used-letters', 'most-used-words',
                'most-used-symbols', 'most-used-numbers',
                'most-used-pronouns']
        }

        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'most-used-letters') {
                this.shadowRoot.querySelector('#most-used-letters p').textContent = newValue
            }
            if (name === 'most-used-words') {
                this.shadowRoot.querySelector('#most-used-words p').textContent = newValue
            }
            if (name === 'most-used-symbols') {
                this.shadowRoot.querySelector('#most-used-symbols p').textContent = newValue
            }
            if (name === 'most-used-numbers') {
                this.shadowRoot.querySelector('#most-used-numbers p').textContent = newValue
            }
            if (name === 'most-used-pronouns') {
                this.shadowRoot.querySelector('#most-used-pronouns p').textContent = newValue
            }
        }
    })
