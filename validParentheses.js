/*this is a last in first out algorithm, so a stack is best.
Make a pojo with the key value pairs as the matching parenthesis.
Make an array that will serve as the stack. 
Do a loop. If the character is closing and the the stack is empty or if the last in
isn't the first that would be popped, return false. Otherwise pop that char.
if charecter is opening charecter then push it to the stack */
function validParentheses(string) {
    const stack = [];
    const parenthesisPairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (let i = 0; i < string.length; i++) {
        let curr = string[i];
        if (parenthesisPairs[curr]) {
            if (stack.length === 0 || stack[stack.length - 1] !== parenthesisPairs[curr]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(curr);
        }
    }
    return stack.length === 0;
}

