import { TextReplacer } from '../modules/text-checkers/TextReplacer.js'

describe('TextReplacer', () => {

  let textReplacer

  beforeEach(() => {
    textReplacer = new TextReplacer()
  })

  describe('replaceWord', () => {
    it('should replace a specified word in the text', () => {
      expect(textReplacer.replaceWord('Hello world', 'world', 'everyone')).toBe('Hello everyone')
    })

    it('should throw TypeError when any argument is not a string', () => {
      expect(() => textReplacer.replaceWord(5, 'world', 'everyone')).toThrow(TypeError)
    })

    it('should throw Error when wordToReplace or wordToReplaceWith is empty', () => {
      expect(() => textReplacer.replaceWord('Hello world', '', 'everyone')).toThrow(Error)
    })
  })

  describe('replaceSymbol', () => {
    it('should replace a specified symbol in the text', () => {
      expect(textReplacer.replaceSymbol('Hello, world!', ',', ';')).toBe('Hello; world!')
    })

    it('should throw Error when symbolToReplace is not in the allowed list', () => {
      expect(() => textReplacer.replaceSymbol('Hello, world!', '&', ';')).toThrow(Error)
    })
  })

  describe('replaceNumber', () => {
    it('should replace a specified number in the text', () => {
      expect(textReplacer.replaceNumber('I have 5 apples', '5', '3')).toBe('I have 3 apples')
    });

    it('should throw an error when numberToReplace or numberToReplaceWith is not a number', () => {
      expect(() => textReplacer.replaceNumber('I have 5 apples', 'five', '3')).toThrow("Both arguments must be of type number.")
    })

  })
})
