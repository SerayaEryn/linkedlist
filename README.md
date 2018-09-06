# linkedlist

[![Build Status](https://travis-ci.org/SerayaEryn/linkedlist.svg?branch=master)](https://travis-ci.org/SerayaEryn/linkedlist)
[![Coverage Status](https://coveralls.io/repos/github/SerayaEryn/linkedlist/badge.svg?branch=master)](https://coveralls.io/github/SerayaEryn/linkedlist?branch=master)
[![NPM version](https://img.shields.io/npm/v/@serayaeryn/linkedlist.svg?style=flat)](https://www.npmjs.com/package/@serayaeryn/linkedlist)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Doubly linked list implementation.

## Installation

```
npm install @serayaeryn/linkedlist
```

## Example
```js
const LinkedList = require('@serayaeryn/linkedlist');

const linkedList = new LinkedList();
linkedList.add('a');
linkedList.add('b');

for (const element of linkedList) {
  console.log(element);
}
linkedList.remove(0);
```
## API
### length
Reflects the number of elements in the linked list.
### shift()
Removes the first element from the linked list and returns that element.
### pop()
Removes the last element from the linked list and returns that element.
### unshift(element)
Adds the `element` to the front of the linked list.
### push(element)
Adds the `element` to the end of the linked list.
### add([ index ], element)
Adds the `element` at the specified `index` of the linked list. If no `index` is specified the `element` will be added at the end of the linked list.
### addAll([ index ], elements)
Adds the `elements` at the specified `index` of the linked list. If no `index` is specified the `elements` will be added at the end of the linked list.
### clear()
Removes all elements from the linked list.
### get(index)
Returns the element at `index`.
### set(index, element)
Sets the `element` at the specified `index` and returns the element 
### remove(index)
Removes the element at `index`.
### indexOf(element)
Returns the first (least) index of an element within the linked list equal to the specified value, or -1 if none is found.
### lastIndexOf(element)
Returns the last (greatest) index of an element within the linked list equal to the specified value, or -1 if none is found.
### includes(element)
Determines whether a linked list contains a certain element.
### toString()
Returns a string representing the linked list and its elements.

## License
[MIT](./LICENSE)