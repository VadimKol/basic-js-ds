const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // remove line with error and write your code here
  //такое ощющение, что этот код сделан, чтобы проходить тесты :(
  //вроде поправил!
  //ну смысл в том, что я просто рекурсивно меняю ссылки на след. элементы, к пред. доступа все равно нет
  //итеративно наверно было бы легче
  if(l !== null) {
    if(l.value === k) { //вначале, если
      l = l.next;
      l = removeKFromList(l, k);//тут поправил, чтобы все k-ашки в начале убрать, а не одну только, то есть присваивание l
    } else {
      if (l.next !== null) {
        while(l.next.value === k) { //подряд
          l.next = l.next.next;
          if(l.next === null) break; //граничное условие
        }
      }
      removeKFromList(l.next, k); //здесь не надо присваивать, я уже сплю:(
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
