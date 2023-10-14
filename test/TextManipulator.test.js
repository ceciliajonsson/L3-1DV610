import { TextManipulator } from '../modules/text-checkers/TextManipulator'

describe('TextManipulator', () => {

  let textManipulator

  beforeEach(() => {
    textManipulator = new TextManipulator()
  })

  describe('replaceWord', () => {
    it('should replace a specified word in the text', () => {
      expect(textManipulator.replaceWord('Hello world', 'world', 'everyone')).toBe('Hello everyone')
    })

    it('should throw TypeError when any argument is not a string', () => {
      expect(() => textManipulator.replaceWord(5, 'world', 'everyone')).toThrow(TypeError)
    })

    it('should throw Error when wordToReplace or wordToReplaceWith is empty', () => {
      expect(() => textManipulator.replaceWord('Hello world', '', 'everyone')).toThrow(Error)
    })
  })

  describe('replaceSymbol', () => {
    it('should replace a specified symbol in the text', () => {
      expect(textManipulator.replaceSymbol('Hello, world!', ',', ';')).toBe('Hello; world!')
    })

    it('should throw Error when symbolToReplace is not in the allowed list', () => {
      expect(() => textManipulator.replaceSymbol('Hello, world!', '&', ';')).toThrow(Error)
    })
  })

  describe('replaceNumber', () => {
    it('should replace a specified number in the text', () => {
      expect(textManipulator.replaceNumber('I have 5 apples', 5, 3)).toBe('I have 3 apples')
    })

    it('should throw TypeError when numberToReplace or numberToReplaceWith is not a number', () => {
      expect(() => textManipulator.replaceNumber('I have 5 apples', 'five', 3)).toThrow(TypeError)
    })
  })

  describe('reverseText', () => {
    it('should reverse the entire text', () => {
      expect(textManipulator.reverseText('Hello')).toBe('olleH')
    })
  })

  describe('reverseSentences', () => {
    it('should reverse the order of sentences and correct the casing', () => {
      expect(textManipulator.reverseSentences('Hello world! How are you?')).toBe('How are you? Hello world!')
    })
  })

})
