import { TextInputValidator } from '../modules/text-checkers/TextInputValidator'

describe('TextInputValidator', () => {
  describe('getValidatedText', () => {
    it('should throw an error for empty input', () => {
      expect(() => new TextInputValidator('').getValidatedText()).toThrow('Input is empty!')
    })

    it('should throw an error for input that is too long', () => {
      expect(() => new TextInputValidator('a'.repeat(1001)).getValidatedText()).toThrow('Input is too long!')
    })

    it('should throw an error for invalid characters', () => {
      expect(() => new TextInputValidator('Invalid $').getValidatedText()).toThrow('Input contains invalid characters!')
    })

    it('should remove additional spaces from input', () => {
      const inputWithExtraSpaces = '  Valid   input 123!?,  '
      const textInput = new TextInputValidator(inputWithExtraSpaces)
      expect(textInput.getValidatedText()).toBe('Valid input 123!?,')
    })
  })
})
