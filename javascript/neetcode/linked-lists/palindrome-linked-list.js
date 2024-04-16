var isPalindrome = function(head) {
    
    let arr = [];
    let node = head;

    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }

    l = 0
    r = arr.length - 1

    while (l < r) {
        if (arr[l] !== arr[r]) {
            return false
        }
        l++
        r--
    }
    return true

    // brute force
    
    // let node = head
    // let arr = []
    
    // while (node !== null) {
    //     arr.push(node.val)
    //     node = node.next
    // }
    
    // let rev = arr.slice().reverse()
   
    // return arr.join('') === rev.join('');

}

// notice in thes linked lists that 
// they are dictionaries with the
// next value equal to the next node
let node1 = { val: 1, next: null };
let node2 = { val: 2, next: null };
let node3 = { val: 2, next: null };
let node4 = { val: 1, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

let head = node1;

console.log(isPalindrome(head))