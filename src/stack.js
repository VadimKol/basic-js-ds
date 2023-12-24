const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = []; //к сожалению массивы в js, являются стэками и очередями
  push(element) {
    // remove line with error and write your code here
    this.stack.push(element);
  }

  pop() {
    // remove line with error and write your code here
    return this.stack.pop();
  }

  peek() {
    // remove line with error and write your code here
    let element = this.pop();
    this.push(element);
    return element;
  }
}

module.exports = {
  Stack
};
