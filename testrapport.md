# Testing Report for "Text Checker App" - Manual Testing

## General Overview

The Text Checker App is designed to allow users to analyze and manipulate text in various ways, from calculating averages and counters to reversing and replacing text.

The code has been manually tested by the developer and a user.

Below is a summary of the manual testing results for the provided code.

## Functional & Non-functional Requirements

### Functional Requirements

Fundamental actions or processes that the app must be able to perform.

- Text Validation: Ensure that the input text meets certain criteria before processing.
- Text Analytics: Count characters, words, sentences, vowels, and much more.
- Text Averages: Get average word length, sentence length, etc.
- Text Frequency: Identify most used letters, words, symbols, numbers, and even pronouns.
- Text Manipulation: Replace words, symbols, numbers or even reverse text and sentences.

### Non-functional Requirements

Desired characteristics and behaviors that do not relate directly to its functional behavior.

- Usability: The UI must be user-friendly and intuitive, even for non-technical users.
- Security: It shouldn't be possible to post scripts.
- Performance: The app should analyze and process the text within a few seconds.

## Test Cases - Developer

### Import of Modules:

Description: Check if all modules are imported correctly without any missing dependencies.

Outcome: Successful.

### Rendering of UI:

Description: Validate that the user interface is rendered correctly with all elements in place.

Outcome: Successful.

### Preformance:

Description: Validate that apps preformance is not slow and results are shown to the user within seconds.

Outcome: Successful.

### Security:

Description: Validate that <script></script> -tags in the input filelds has not effect on the app.

Outcome: Successful.

### Error Handling

Description: Test how the application handles errors, for instance, if invalid input is provided.

Outcome: Successful. Proper error messages are displayed to the user.

### Text Input Validation

Description: Check the functionality of text validation to ensure proper text input.

Outcome: Successful.

### Clear Result Functionality

Description: Validate that the results are cleared appropriately before new calculations.

Outcome: Successful.

### Text Average Calculations

Description: Ensure that the average word and sentence lengths are calculated accurately.

Outcome: Successful.

### Text Counter Functionality

Description: Validate that text characteristics (like character count, word count, etc.) are determined correctly.

Outcome: Successful.

### Text Frequency Calculations

Description: Validate that the most used letters, words, symbols, numbers, and pronouns are identified correctly.

Outcome: Successful.

### Text Reverser Functionality

Description: Test that the text and sentences can be reversed appropriately.

Outcome: Successful.

### Text Replacer Functionality

Description: Validate that specific words, symbols, and numbers can be replaced within the text.

Outcome: Successful.

## Conclusion

The "Text Checker App" has been manually tested and has met the expectations provided in Functional & Non-functional Requirements. It is recommended to also perform automated testing to ensure all functionalities are covered.

## Test Cases - User

### User Background

- The tester is a 32-year-old female student from Sweden.
- She is fluent in Swedish and English.
- She considers herself to have high computer skills and knowledge.

### Method

The test was carried out with a user actively engaging with the application. This was done to provide the developer with insights into the application's intuitiveness, identify any overlooked UX/UI features, and gather user feedback on usability to further improve the app.

### Findings

1. Implemented - The user was missing being able to use å, ä, ö
2. Implemented - The user was missing being able to use () -
3. Implemented - The user would have liked to see a description of tha app.
4. The user found it suprising that there was no error presented if one were to replace an number that doesn’t exists.
5. The user found it suprising that Most Used Number only count 0-9, so numbers like 11 (eleven) counts as 1 being present 2 times.
6. Some analytics, like Reverse Sentences, could use a text explanation of what it does / calculates.
7. The user thought it would look nice with capitalize the letters in Most Used Letters.
8. The user thought it would look nice with capitalize the first the letters of every word in Most Used Words.
9. The user thought it would look nice with capitalize the first the letters of every word in Most Used Pronouns. Maybe also provide a list of applicable pronouns.
10. The user didn't understand why the boxes were hidden until Submit was clicked. Could increase usability by having it visible from start to know what to expect.
11. The user thought it was great that the app is responsive.
12. The user missed having the replaced word/symbol/number in underline. Thinks it could have been a cool feature.
13. The user thinks that in Text Average, would be good to know if it is average words that is referred in Average Sentence Length.
14. The user found it odd that Reverse Sentences didn't reverse if there was no sentence.

## Notes and conclusion

Several areas of improvement have been identified from the user testing, particularly in the areas of UI enhancements, feature explanations, and handling of specific characters. While the app's responsiveness was commended, there were multiple suggestions to make the UX more intuitive and informative. The insights gained from this test will help developers refining the app to make it more user-friendly.
