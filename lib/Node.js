'use strict'

module.exports = class Node {
  constructor (previous, element, next) {
    this.previous = previous
    this.next = next
    this.element = element
  }

  setElement (element) {
    this.element = element
  }

  getElement () {
    return this.element
  }

  setPrevious (previous) {
    this.previous = previous
  }

  getPrevious () {
    return this.previous
  }

  setNext (next) {
    this.next = next
  }

  getNext () {
    return this.next
  }
}
