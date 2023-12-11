var reverseList = function(head) {
    
    let values = []
    let curr = head
    while (curr) {
        values.unshift(curr.val)
        curr = curr.next
        // console.log(values)
    }

    // point to head in memory
    curr = head
    for (let i = 0; i < values.length; i++) {
        curr.val = values[i]
        curr = curr.next
        // console.log(head)
    }

    return head
};