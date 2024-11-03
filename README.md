# Calculator: Odin Project

## The Final Solution (Foundations): [Calculator](https://www.theodinproject.com/lessons/foundations-calculator)

"Just gimme yo numbers and I'll Calc U Later."

### [See Live Preview](https://karldreta.github.io/Calculator-OdinProject/)

#### In this project, I will synthesize everything I learned about HTML, CSS, and JavaScript to create a calculator from scratch.

## Finished: 8 MAY 2024
"Whoaaah, That was hard."

## What I Learned
- Refined my conditionals (if-else statements).
- Utilized helper functions (e.g., flagging `isEqualsPressed()`, `isOperator()`).
- Used methods effectively.
- Improved my DOM manipulation skills.
- Realized the benefit of writing pseudocodes (a lot of it).
- Gained experience in reading complex code.
- Learned the importance of asking good questions.

### New Insights
I discovered a new approach to problem-solving, which I call **global problem solving**. When facing an issue that seems unsolvable, don't try to individualize it. Instead, ask specific questions one after the other, and solve it globally. For example:

```javascript
    if (a === '' || b === '' || operator === '') {
        firstNum = '';
        lastNum = '';
        operator = '';
        result = 0;
    }
```
In the `operate()` function, if either `a`, `b` or `operator` is not defined it will automatically display `NaN` (Not a Number), but instead of worrying about if they are defined before displaying `NaN`, we just reset everything to their initial state. If these variables are not defined and we continue with the operation, the output could be `NaN`, and further inputs will be appended to this value and might result in unintended values like `NaN7` or `NaN+`.

Moreover, most of the critical thinking had to come from me since I was the only one who truly understood the context of my code. Help from online sources or even Generative AIs have not been useful in this scenario, because whenever I try to tell an AI what I want to do, two things happen, either the AI don't understand my spaghetti code or I don't understand the code it generates. Either case, I was forced to rely on my own understanding.

## Conclusion

Given that this is the last foundations project, it has been the hardest for me so far. It took me two weeks to finish, but it was definitely worth it. I am ready to choose my path forward.
