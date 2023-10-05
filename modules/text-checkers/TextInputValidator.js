export class TextInputValidator {
  constructor(text) {
    this.text = text
  }

  #validateLength() {
    if (this.text.length === 0) {
      throw new Error("Input is empty!")
    }
    if (this.text.length > 1000) {
      throw new Error("Input is too long!")
    }    
  }
  #validateInput() {
    const validCharacters = /^[a-zA-Z0-9\s.!?,']+$/
    if (!validCharacters.test(this.text)) {
      throw new Error("Input contains invalid characters!")
    }
  }

  #removeAdditionalSpaces() {
    this.text = this.text.replace(/\s+/g, ' ').trim()
  }

  getValidatedText() {
    this.#validateLength()
    this.#validateInput()
    this.#removeAdditionalSpaces()
    return this.text
  }
}
