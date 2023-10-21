const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";
            
h1 {
  margin: 20px;
}

</style>
<h2>Text Reverser</h2>

<div id="reverse-text">
<h3>Reverse Text</h3>
<p></p>
</div>

<div id="reverse-sentences">
<h3>Reverse Sentences</h3>
<p></p>
</div>
      `
customElements.define('text-reversers',
    class extends HTMLElement {
        static get observedAttributes() {
            return ['reverse-text', 'reverse-sentences']
        }

        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'reverse-text') {
                this.shadowRoot.querySelector('#reverse-text p').textContent = newValue
            }
            if (name === 'reverse-sentences') {
                this.shadowRoot.querySelector('#reverse-sentences p').textContent = newValue
            }
        }
    })
