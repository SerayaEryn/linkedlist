'use strict';

const LinkedList = require('..');
const t = require('tap');
const test = t.test;

test('should create empty list of no argument', t => {
  t.plan(3);

  const linkedList = new LinkedList();

  t.strictEquals(0, linkedList.length);
  t.strictEquals(null, linkedList.first);
  t.strictEquals(null, linkedList.last);
})

test('should create empty list from empty array', t => {
  t.plan(3);

  const linkedList = new LinkedList([]);

  t.strictEquals(0, linkedList.length);
  t.strictEquals(null, linkedList.first);
  t.strictEquals(null, linkedList.last);
})

test('should create empty list from empty linkedlist', t => {
  t.plan(3);

  const linkedList = new LinkedList(new LinkedList());

  t.strictEquals(0, linkedList.length);
  t.strictEquals(null, linkedList.first);
  t.strictEquals(null, linkedList.last);
})

test('should create empty list from array with one element', t => {
  t.plan(3);

  const linkedList = new LinkedList(['1']);

  t.strictEquals(1, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('1', linkedList.get(linkedList.length - 1));
});

test('should create empty list from array three elements', t => {
  t.plan(3);

  const linkedList = new LinkedList(['1', '2', '3']);

  t.strictEquals(3, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('3', linkedList.get(linkedList.length - 1));
})

test('should clear list', t => {
  t.plan(3);
  const linkedList = new LinkedList(['1']);

  linkedList.clear();

  t.strictEquals(0, linkedList.length);
  t.strictEquals(null, linkedList.first);
  t.strictEquals(null, linkedList.last);
})

test('should allow to iterate over list', t => {
  t.plan(3);
  const linkedList = new LinkedList(['1', '2', '3']);

  for (const element of linkedList) {
    t.ok(element);
  }
})

test('should allow to iterate over empty list', t => {
  t.plan(0);
  const linkedList = new LinkedList();

  for (const element of linkedList) {
    t.ok(element);
  }
})

test('should return index of element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.indexOf('b');

  t.strictEquals(1, index);
})

test('should return -1 as index of element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.indexOf('d');

  t.strictEquals(-1, index);
})

test('should return last index of element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.lastIndexOf('b');

  t.strictEquals(2, index);
})

test('should return -1 if no last index of element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.lastIndexOf('d');

  t.strictEquals(-1, index);
})

test('should remove element from start', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3']);

  const element = linkedList.remove(0);

  t.strictEquals(2, linkedList.length);
  t.strictEquals('1', element);
})

test('should remove element from middle', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3']);

  const element = linkedList.remove(1);

  t.strictEquals(2, linkedList.length);
  t.strictEquals('2', element);
})

test('should remove element from end', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3']);

  const element = linkedList.remove(2);

  t.strictEquals(2, linkedList.length);
  t.strictEquals('3', element);
})

test('should pop element from end', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3']);

  const element = linkedList.pop();

  t.strictEquals(2, linkedList.length);
  t.strictEquals('3', element);
})

test('should pop element from end', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1']);

  const element = linkedList.pop();

  t.strictEquals(0, linkedList.length);
  t.strictEquals('1', element);
})

test('should shift element from start', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3']);

  const element = linkedList.shift();

  t.strictEquals(2, linkedList.length);
  t.strictEquals('1', element);
})

test('should shift element from start', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1']);

  const element = linkedList.shift();

  t.strictEquals(0, linkedList.length);
  t.strictEquals('1', element);
})

test('should return true if list includes element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.includes('b');

  t.strictEquals(true, index);
})

test('should return false if list does not include element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a', 'b', 'b', 'c']);

  const index = linkedList.includes('d');

  t.strictEquals(false, index);
})

test('should get element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['1', '2', '3', '4']);

  const element = linkedList.get(2);

  t.strictEquals('3', element);
})

test('should get element', t => {
  t.plan(1);
  const linkedList = new LinkedList(['1', '2', '3', '4']);

  const listAsString = linkedList.toString();

  t.strictEquals('1,2,3,4', listAsString);
})

test('should add all elements at index', t => {
  t.plan(1);
  const linkedList = new LinkedList();

  linkedList.addAll(0, ['1', '2', '3', '4']);

  t.strictEquals(4, linkedList.length);
})

test('should add all elements at index', t => {
  t.plan(1);
  const linkedList = new LinkedList(['a']);

  linkedList.addAll(0, ['1', '2', '3', '4']);

  t.strictEquals(5, linkedList.length);
})

test('should set element at index', t => {
  t.plan(2);
  const linkedList = new LinkedList(['1', '2', '3', '4']);

  const oldElement = linkedList.set(1, 'foo')

  t.strictEquals('2', oldElement);
  t.strictEquals('foo', linkedList.get(1));
})

test('should add element', t => {
  t.plan(3);
  const linkedList = new LinkedList(['a']);

  linkedList.add('1');

  t.strictEquals(2, linkedList.length);
  t.strictEquals('a', linkedList.get(0));
  t.strictEquals('1', linkedList.get(linkedList.length - 1));
})

test('should add element at index', t => {
  t.plan(3);
  const linkedList = new LinkedList(['a']);

  linkedList.add(0, '1');

  t.strictEquals(2, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('a', linkedList.get(linkedList.length - 1));
})

test('should add element at index', t => {
  t.plan(4);
  const linkedList = new LinkedList(['a', 'b']);

  linkedList.add(1, '1');

  t.strictEquals(3, linkedList.length);
  t.strictEquals('a', linkedList.get(0));
  t.strictEquals('1', linkedList.get(1));
  t.strictEquals('b', linkedList.get(linkedList.length - 1));
})

test('should push element', t => {
  t.plan(3);
  const linkedList = new LinkedList(['a']);

  linkedList.push('1');

  t.strictEquals(2, linkedList.length);
  t.strictEquals('a', linkedList.get(0));
  t.strictEquals('1', linkedList.get(linkedList.length - 1));
})

test('should push element', t => {
  t.plan(3);
  const linkedList = new LinkedList();

  linkedList.push('1');

  t.strictEquals(1, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('1', linkedList.get(linkedList.length - 1));
})

test('should unshift element', t => {
  t.plan(3);
  const linkedList = new LinkedList(['a']);

  linkedList.unshift('1');

  t.strictEquals(2, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('a', linkedList.get(linkedList.length - 1));
})

test('should unshift element', t => {
  t.plan(3);
  const linkedList = new LinkedList();

  linkedList.unshift('1');

  t.strictEquals(1, linkedList.length);
  t.strictEquals('1', linkedList.get(0));
  t.strictEquals('1', linkedList.get(linkedList.length - 1));
})

test('should throw error on get(linkedList.length - 1) if no last element', t => {
  t.plan(1);
  const linkedList = new LinkedList();

  try {
    linkedList.get(linkedList.length - 1)();
  } catch (err) {
    t.ok(err);
  }
})

test('should throw error on getFirst if no first element', t => {
  t.plan(1);
  const linkedList = new LinkedList();

  try {
    linkedList.get(0);
  } catch (err) {
    t.ok(err);
  }
})

test('should throw error on shift if no element', t => {
  t.plan(1);
  const linkedList = new LinkedList();

  try {
    linkedList.shift();
  } catch (err) {
    t.ok(err);
  }
})

test('should throw error on pop if no element', t => {
  t.plan(1);
  const linkedList = new LinkedList();

  try {
    linkedList.pop();
  } catch (err) {
    t.ok(err);
  }
})