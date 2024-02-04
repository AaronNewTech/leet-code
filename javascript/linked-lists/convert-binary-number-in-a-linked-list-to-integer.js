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

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
}

var getDecimalValue = function(head) {
    let values = '';
    let curr = head;

    while (curr) {
        values += curr.data;
        curr = curr.next;
    }

    return parseInt(values, 2);
};

// Create a linked list with values [1, 0, 1]
const linkedList = new LinkedList();
linkedList.insertFirst(1);
linkedList.insertFirst(0);
linkedList.insertFirst(1);

// Call the getDecimalValue function with the linked list as an argument
console.log(getDecimalValue(linkedList.head));
