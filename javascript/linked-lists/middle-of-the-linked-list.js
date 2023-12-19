
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

var middleNode = function(head) {
    let values = []
    let curr = head

    while (curr) {
        values.push(curr)
        curr = curr.next
    }
   

    if (values.length % 2 === 0) {
        console.log(values[values.length / 2])
        return values[values.length / 2]
    }
    else {
        console.log(values[Math.floor(values.length / 2)])
        return values[Math.floor(values.length / 2)]
    }
  

   
};

// Create a linked list with values [1, 2, 3, 4, 5]
const linkedList = new LinkedList();
linkedList.insertFirst(5);
linkedList.insertFirst(4);
linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(1);

// Call the middleNode function with the linked list as an argument
middleNode(linkedList.head)