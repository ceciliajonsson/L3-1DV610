import { TextFrequency } from '../modules/text-checkers/TextFrequency.js'

let textFrequency

beforeEach(() => {
    textFrequency = new TextFrequency()
})

describe('TextFrequency', () => {
  const sampleText = '3 quick brown foxes jumped over 1 lazy dog. They were quick! The 3 foxes then went home.'

it('should correctly find the most used letters', () => {
  const result = textFrequency.mostUsedLetters(sampleText, 5)
  expect(result).toEqual([['e', 11], ['o', 6], ['t', 4], ['h', 4], ['u', 3]])
})

it('should correctly find the most used words', () => {
  const result = textFrequency.mostUsedWords(sampleText)
  expect(result).toEqual([['quick', 2], ['foxes', 2], ['brown', 1], ['jumped', 1], ['over', 1]])
})

it('should correctly find the most used symbols', () => {
  const result = textFrequency.mostUsedSymbols(sampleText)
  expect(result).toEqual([['.', 2], ['!', 1]])
})

it('should correctly find the most used numbers', () => {
  const result = textFrequency.mostUsedNumbers(sampleText)
  expect(result).toEqual([['3', 2], ['1', 1]])
})

  it('should correctly find the most used pronouns', () => {
    const result = textFrequency.mostUsedPronouns(sampleText)
    expect(result).toEqual([['they', 1]])
  })
})
