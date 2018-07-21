'use strict';

const Node = require('./lib/Node');

module.exports = class LinkedList {
  constructor(elements) {
    this.length = 0;
    this.first = null;
    this.last = null;
    this.addAll(elements || []);
  }

  [Symbol.iterator]() {
    let node = new Node(null, null, this.first);
    return {
      next() {
        node = node.getNext();
        const done = node === null;
        return {
          value: done ? null : node.getElement(),
          done
        }
      }
    }
  }

  shift() {
    if (!this.first) {
      throw new Error('No such element!');
    }
    const element = this.first.getElement();
    const next = this.first.getNext();
    this.first = next;
    if (!next) {
      this.last = null;
    } else {
      next.setPrevious(null);
    }
    this.length--;
    return element;
  }

  pop() {
    if (!this.last) {
      throw new Error('No such element!');
    }
    const element = this.last.getElement();
    const previous = this.last.getPrevious();
    this.last = previous;
    if (!previous) {
      this.first = null;
    } else {
      previous.setNext(null);
    }
    this.length--;
    return element;
  }

  unshift(element) {
    const newNode = new Node(null, element, this.first);
    const first = this.first;
    this.first = newNode;
    if (!first) {
      this.last = newNode;
    } else {
      this.first.setPrevious(newNode)
    }
    this.length++;
  }

  push(element) {
    const newNode = new Node(this.last, element, null);
    const last = this.last;
    this.last = newNode;
    if (last == null) {
      this.first = newNode;
    } else {
      this.last.setNext(newNode);
    }
    this.length++;
  }

  add(index, element) {
    let internalIndex = index;
    let internalElement = element;
    if (!element) {
      internalIndex = this.length;
      internalElement = index;
    }
    this._add(internalIndex, internalElement);
  }

  addAll(index, elements) {
    let internalIndex = index;
    let internalElements = elements;
    if (!elements) {
      internalIndex = this.length;
      internalElements = index;
    }
    this._addAll(internalIndex, internalElements);
  }

  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  get(index) {
    const node = this._getNode(index);
    return node.getElement();
  }

  set(index, element) {
    const node = this._getNode(index);
    const oldElement = node.getElement();
    node.setElement(element);
    return oldElement;
  }

  remove(index) {
    const node = this._getNode(index);
    return this._remove(node);
  }

  indexOf(element) {
    let index = 0;
    let node = this.first;
    while (node != null) {
      if (node.getElement() == element) {
        return index;
      }
      index++;
      node = node.getNext();
    }
    return -1;
  }

  lastIndexOf(element) {
    let index = this.length;
    let node = this.last;
    while (node != null) {
      index--;
      if (node.getElement() === element) {
        return index;
      }
      node = node.getPrevious();
    }
    return -1;
  }

  includes(element) {
    return this.indexOf(element) !== -1;
  }

  toString() {
    return [...this].toString();
  }

  _getNode(index) {
    if (index < this.length / 2) {
      let node = this.first;
      let i = 0;
      while (i < index) {
        node = node.getNext();
        i++;
      }
      return node;
    } else {
      let node = this.last;
      let i = this.length - 1;
      while (i > index) {
        node = node.getPrevious();
        i--;
      }
      return node;
    }
  }

  _remove(node) {
    const element = node.getElement();
    const next = node.getNext();
    const previous = node.getPrevious();

    if (!previous) {
      this.first = next;
    } else {
      previous.setNext(null);
      node.setPrevious(null);
    }

    if (!next) {
      this.last = previous;
    } else {
      next.setPrevious(previous);
      node.setNext(null);
    }

    this.length--;
    return element;
  }

  _add(index, element) {
    if (index === this.length) {
      this.push(element);
    } else {
      const node = this._getNode(index);
      this._addBefore(element, node);
    }
  }

  _addAll(index, elements) {
    const elementCount = elements.length;
    if (elementCount === 0) {
      return;
    }
    let previous = null;
    let successor = null;
    if (index === this.length) {
      previous = this.last;
    } else {
      successor = this._getNode(index);
      previous = successor.getPrevious();
    }
    previous = this._addNewNodes(elements, previous)
    if (!successor) {
      this.last = previous;
    } else {
      previous.setNext(successor);
      successor.setPrevious(previous);
    }
    this.length += elementCount;
  }

  _addNewNodes(elements, previous) {
    for (const element of elements) {
      previous = this._addNewNode(element, previous);
    }
    return previous;
  }

  _addNewNode(element, previous) {
    const newNode = new Node(previous, element, null);
    if (!previous) {
      this.first = newNode;
    } else {
      previous.setNext(newNode);
    }
    return newNode;
  }

  _addBefore(element, next) {
    const previous = next.getPrevious();
    const newNode = new Node(previous, element, next);
    next.setPrevious(newNode);
    if (!previous) {
      this.first = newNode;
    } else {
      previous.setNext(newNode);
    }
    this.length++;
  }
}
