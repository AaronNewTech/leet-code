class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(val) {
        this.head = new ListNode(val, this.head);
    }
}

var reverseList = function(head) {
    let values = [];
    let curr = head;

    while (curr) {
        values.unshift(curr.val);
        curr = curr.next;
    }

    curr = head;

    for (let i = 0; i < values.length; i++) {
        curr.val = values[i];
        curr = curr.next;
    }

    return head;
};

const linkedList = new LinkedList();
linkedList.insertFirst(5);
linkedList.insertFirst(4);
linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(1);

console.log(reverseList(linkedList.head));
