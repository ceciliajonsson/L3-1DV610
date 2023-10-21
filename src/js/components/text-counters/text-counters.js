const template = document.createElement('template')
template.innerHTML = `

<style>
@import "../../../css/styles.css";

</style>
<div class="text-counters box">
<h2>Text Counter</h2>

<div id="count-character-inc-spaces">
<h3>Count Characters Including Spaces</h3>
<p></p>
</div>

<div id="count-character-exc-spaces">
<h3>Count Characters Excluding Spaces</h3>
<p></p>
</div>

<div id="count-letters">
<h3>Count Letters</h3>
<p></p>
</div>

<div id="count-words">
<h3>Count Words</h3>
<p></p>
</div>

<div id="count-sentences">
<h3>Count Sentences</h3>
<p></p>
</div>

<div id="count-paragraphs">
<h3>Count Paragraphs</h3>
<p></p>
</div>


<div id="count-vowels">
<h3>Count vowels</h3>
<p></p>
</div>


<div id="count-consonants">
<h3>Count Consonants</h3>
<p></p>
</div>
</div>

`
customElements.define('text-counters',
    class extends HTMLElement {
        static get observedAttributes() {
            return ['count-character-inc-spaces', 'count-character-exc-spaces',
                'count-letters', 'count-words', 'count-sentences', 'count-paragraphs',
                'count-vowels', 'count-consonants']
        }

        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
                .appendChild(template.content.cloneNode(true))
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'count-character-inc-spaces') {
                this.shadowRoot.querySelector('#count-character-inc-spaces p').textContent = newValue
            }
            if (name === 'count-character-exc-spaces') {
                this.shadowRoot.querySelector('#count-character-exc-spaces p').textContent = newValue
            }
            if (name === 'count-letters') {
                this.shadowRoot.querySelector('#count-letters p').textContent = newValue
            }
            if (name === 'count-words') {
                this.shadowRoot.querySelector('#count-words p').textContent = newValue
            }
            if (name === 'count-sentences') {
                this.shadowRoot.querySelector('#count-sentences p').textContent = newValue
            }
            if (name === 'count-paragraphs') {
                this.shadowRoot.querySelector('#count-paragraphs p').textContent = newValue
            }
            if (name === 'count-vowels') {
                this.shadowRoot.querySelector('#count-vowels p').textContent = newValue
            }
            if (name === 'count-consonants') {
                this.shadowRoot.querySelector('#count-consonants p').textContent = newValue
            }
        }
    })
