const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue;
  head;
  getUnderlyingList() {
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // remove line with error and write your code here
    if(this.queue === undefined) {
      this.queue = new ListNode(value);
      this.head = this.queue;
    } else {
      //идем в конец, в хвост, и добавляем элемент туда
      while(this.queue.next !== null)
        this.queue = this.queue.next;
      this.queue.next = new ListNode(value);
    }
  }

  dequeue() {
    // remove line with error and write your code here
    //указатель головы есть, его просто смещаем вперед, пофиг на null
    let element = null;
    if(this.head !== null && this.head !== undefined) {//это не нужно, но вдруг пусто, тогда нельзя будет обратиться к value
      element = this.head.value;
      this.head = this.head.next;
    }
    return element;
  }
}

module.exports = {
  Queue
};
