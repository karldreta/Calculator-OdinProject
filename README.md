# Calculator: Odin Project

## The Final Foundations Solution

"Just gimme yo numbers and I'll Calc U Later."

### [See Live Preview](https://karldreta.github.io/calculator-odinProject/)

#### In this project, I synthesize everything I learned about HTML, CSS, and JavaScript to create a calculator from scratch.

## Finished: 8 MAY 2024
"Whoaaah, That was hard."

## What I Learned
- Refined my conditionals (if-else statements).
- Utilized helper functions (e.g., flagging `isEqualsPressed()`, `isOperator()`).
- Used methods effectively.
- Improved my DOM manipulation skills.
- Realized the benefit of writing pseudocode (a lot of it).
- Gained experience in reading complex code.
- Learned the importance of asking questions.

### New Insights
I discovered a new approach to problem-solving, which I call "global problem solving." When facing an issue that seems unsolvable, don't try to generalize it. Instead, ask specific questions one after the other, and solve it globally. For example:

```javascript
    if (a === '' || b === '' || operator === '') {
        firstNum = '';
        lastNum = '';
        operator = '';
        result = 0;
    }
```

```javascript  
    if(a === '' || b === '' || operator === '') {
        firstNum = '';
        lastNum = '';
        operator = '';
        result = 0
    }
```
Instead of worrying about what `a`, `b`, or the operator should be before displaying NaN, just reset everything to "0". It might not be the most practical solution, but it works for now.

Most of the critical thinking had to come from me since I was the only one who truly understood the context of my code.

## Conclusion

Given that this is the last foundations project, it has been the hardest for me so far. It took me two weeks to finish, but it was definitely worth it. I am ready to choose my path forward.
