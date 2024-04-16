class MinStack:

    def __init__(self):
        print(self)
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)

        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]


# Given input
commands = ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
values = [[], [-2], [0], [-3], [], [], [], []]

# Create an instance of MinStack
min_stack = None

# Process commands and values
for i in range(len(commands)):
    command = commands[i]
    value = values[i]

    if command == "MinStack":
        min_stack = MinStack()
    elif command == "push":
        min_stack.push(value[0])
    elif command == "pop":
        min_stack.pop()
    elif command == "top":
        result = min_stack.top()
        print(f"Top element: {result}")
    elif command == "getMin":
        result = min_stack.getMin()
        print(f"Minimum element: {result}")
