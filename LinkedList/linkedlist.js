class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
    return this.head;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;

    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  insertAt(data, index) {
    // if the list is empty i.e. head = null
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    // if new node needs to be inserted at the front of the list i.e. before the head.
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
  }

  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head
  }

  deleteLastNode() {
    if (!this.head) {
      return null;
    }
    // if only one node in the list
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;

    return this.head;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
  }

  deleteList() {
    this.head = null;
  }
}


let linkedList = new LinkedList()
linkedList.insertAtBeginning('1');
linkedList.insertAtBeginning('2');
linkedList.insertAtBeginning('3');
console.log(linkedList.getAt(0))
console.log(linkedList)
