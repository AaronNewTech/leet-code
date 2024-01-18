from typing import List
def evalRPN(tokens: List[str]) -> int:
        stack = []
        for c in tokens:
            if c == "+":
                stack.append(stack.pop() + stack.pop())
            elif c == "-":
                a = stack.pop() 
                b = stack.pop()
                stack.append(b - a)
            elif c == "*":
                stack.append(stack.pop() * stack.pop())
            elif c == "/":
                a = stack.pop()
                b = stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(c))
        print(stack[0])
        return stack[0]

evalRPN(["2","1","+","3","*"])
evalRPN(["4","13","5","/","+"])
evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])