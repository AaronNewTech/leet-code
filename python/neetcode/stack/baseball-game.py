from typing import List
def calPoints(operations: List[str]) -> int:
        stack = []
        for op in operations:
            if op == "+":
                stack.append(stack[-1] + stack[-2])
            elif op == "D":
                stack.append(2 * stack[-1])
            elif op == "C":
                stack.pop()
            else:
                stack.append(int (op))
        print(sum(stack))
        return sum(stack)


calPoints(["5","2","C","D","+"])

calPoints(["5","-2","4","C","D","9","+","+"])

calPoints(["1","C"])