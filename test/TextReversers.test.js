import { TextReverser } from '../modules/text-checkers/TextReverser.js'

describe('TextReverser', () => {

  let textReverser

  beforeEach(() => {
    textReverser = new TextReverser()
  })

  describe('reverseText', () => {
    it('should reverse the entire text', () => {
      expect(textReverser.reverseText('Hello')).toBe('olleH')
    })
  })

  describe('reverseSentences', () => {
    it('should reverse the order of sentences and correct the casing', () => {
      expect(textReverser.reverseSentences('Hello world! How are you?')).toBe('How are you? Hello world!')
    })
  })

})
