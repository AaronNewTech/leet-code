class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head: ListNode) -> ListNode:
    # Base case: if the list is empty or has only one node
    if not head or not head.next:
        return head

    # Recursive case
    new_head = reverseList(head.next)
    head.next.next = head
    head.next = None

    return new_head

# Helper function to print the linked list
def printList(head):
    while head:
        print(head.val, end=" -> ")
        head = head.next
    print("None")

# Example usage
if __name__ == "__main__":
    # Example linked list: 1 -> 2 -> 3 -> 4 -> 5
    linked_list = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

    print("Original list:")
    printList(linked_list)

    reversed_list = reverseList(linked_list)

    print("\nReversed list:")
    printList(reversed_list)

    # Example linked list: 1 -> 2 -> None
    linked_list_1 = ListNode(1, ListNode(2))

    print("Original list:")
    printList(linked_list_1)

    reversed_list_1 = reverseList(linked_list_1)

    print("\nReversed list:")
    printList(reversed_list_1)

    # Example with None
    linked_list_none = None

    print("\nOriginal list with None:")
    printList(linked_list_none)

    reversed_list_none = reverseList(linked_list_none)

    print("\nReversed list with None:")
    printList(reversed_list_none)