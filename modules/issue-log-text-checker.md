# Issue Log: Text Checker Module 
Document to track and log bugs and improvements for the Text Checker Module.

To be documented as issues in https://github.com/ceciliajonsson/L2-1DV610/issues.

## TextAverages
1. Remove 'static' keyword from all funcitons.
2. Rename to TextAverage (from TextAverages) to have the same singular as the other classes
3. Include å, ä, ö in averageWordLength

## TextCounter
1. Remove 'static' keyword from all funcitons.
2. Fix bug countSentences so it counts text without .!? as 0. And !! counts as 1 sentence.
3. Include å, ä, ö in countLetters, countCharactersExcSpaces & countVowels 
4. Include  -, (, and ) in countCharactersExcSpaces

## TextFrequency
1. Remove 'static' keyword from all funcitons.
2. Add return text in mostUsedSymbols, mostUsedNumbers and mostUsedPronouns if no instances were found.
3. Update mostUsedLetters, mostUsedWords, mostUsedSymbols, mostUsedNumbers, mostUsedPronouns for a more visual pleasing output. 
4. Updated mostUsedLetters to include å, ä and ö.
5. Update mostUsedWords to include å, ä, ö and 0-9

## TextInputValidator
1. Change so that removeAdditionalSpaces, validateInput, validateLength are all private functions.
2. Include å, ä, ö, -, (, and ) in validateInput

## TextManipulator
1. Remove 'static' keyword from all funcitons.
2. Remove unneccecery comment ("If the text is empty or doesn't contain !?., send 'Hello World' back") in reverseSentences.
3. Remove unneccecery comments in replaceWord.
4. Split TextManipulator up to two different modules. TextReplacer and TextReverser

## TextReplacer (priviously part of TextManipulator)
1. Update replaceWord to throw an error when a non-word (like a number) is entered
2. Update replaceNumber to throw an error if a number isn't entered
3. Update replaceSymbol to include -, ( and ) 

4. Comment on line 43 in TextManipulator says: // If the text is empty or doesn't contain !?., send 'Hello World' back 
This is false as this has been updated and now returns: 'Couldn\'t find any sentences in the text.'

## Test
1. Update the tests as we are not using `static` anymore.

1. Define a variable (for example textAverages/textCounter/textFrequency/textManipulator) outside of the individual tests.
2. Add a beforeEach block to instantiate TextAverages/TextCounter/TextFrequency/TextManipulator before each test.
3. Update the methods from being called on, example textAverages, to being called on the textAverages instance.

2. For the TextInputValidator test. Separate out these into distinct test cases to make the tests more granular, readable, and maintainable. Each test should ideally test one "thing" or behavior.

3. Test TextFrequency - should correctly find the most used letters is incorrect. Result should be: 'e', 11, ['o', 6], ['t', 4], ['h', 4], ['u', 3]

4. Given that the methods are now private in TextInputValidator we are only able to test the public method of the class which is getValidatedText.