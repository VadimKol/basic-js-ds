const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
//на коленке написано, но времени нет
class BinarySearchTree {
  //дерево представляется списком с нодами с 2 указателями на лево и право
  rootTree = null;

  root() {
    // remove line with error and write your code here
    return this.rootTree;
  }

  add(data) {
    // remove line with error and write your code here
    //кидаем в корень, если он пуст, иначе кидаем налево или направо
    if (this.rootTree === null)
      this.rootTree = {data: data, left: null, right: null};
    else
      addNode(this.rootTree, data);
    //рекурсивный спуск по дереву, меньше лево, иначе право
    function addNode(node, data) {
      if (node.data > data) {
        if (node.left ===  null)
          node.left = {data: data, left: null, right: null};
        else //если слева что-то есть, идем еще левее
          addNode(node.left, data);
      } else {
        if (node.right ===  null)
          node.right = {data: data, left: null, right: null};
        else
          addNode(node.right, data);
      }
    }
  }

  has(data) {
    // remove line with error and write your code here
    return this.find(data) !== null;
  }

  find(data) {
    // remove line with error and write your code here
    function findNode(node, data) {
      if (node === null)
        return null;
      else if (node.data > data)
        return findNode(node.left, data);
      else if (node.data < data)
        return findNode(node.right, data);
      else
        return node;
    }
    return findNode(this.rootTree, data);
  }

  remove(data) {
    // remove line with error and write your code here
    function removeNode (node, data) { //рекурсивно удаляем элемент из дерева
      if (node === null)
        node = null;//ничего не делаем
      else if (node.data > data)
        node.left = removeNode(node.left, data);//ищем слева
      else if (node.data < data)
        node.right = removeNode(node.right, data);
      else {//нашли искомую ноду, смотрим на детей

        if (node.left === null && node.right === null)//если это лист, то просто удаляем его
          node = null;
        else if (node.left === null && node.right !== null)//если правый ребенок есть, то вместо него будет он
          node = node.right;
        else if (node.right === null && node.left !== null)//иначе левый ребонок
          node = node.left;
        else { //2 ребенка есть, берем минимум из правого поддерева и свапаем его
          //это уже костыли, хз, надо запомнить лево и право у того что заменяем
          let right = node.right;
          let left = node.left;

          node = findMinNode(right);

          removeNode(right, node.data);//удаляем этот минимум из дерева

          //присваиваем, только если элемент, не является его ребенком
          if (node.data !== right.data)
            node.right = right;
          if (node.data !== left.data)
            node.left = left;
          function findMinNode(node) {
            return node.left === null ? node: findMinNode(node.left);
          }
        }
      }
      return node;
    }
    //начинаем искать с корня, элемент, который нужно удалить
    //обязательно присваиваем корню, так как могут удалить корень
    this.rootTree = removeNode(this.rootTree, data);
  }

  min() {
    // remove line with error and write your code here
    //это самый левый элемент
    function findMin(node) {
      if (node === null)
        return null;
      else if (node.left !== null)
        return findMin(node.left);
      else
        return node.data;
    }
    return findMin(this.rootTree);
  }

  max() {
    // remove line with error and write your code here
    //а это самый правый элемент
    function findMax(node) {
      if (node === null)
        return null;
      else if (node.right !== null)
        return findMax(node.right);
      else
        return node.data;
    }
    return findMax(this.rootTree);
  }
}

module.exports = {
  BinarySearchTree
};