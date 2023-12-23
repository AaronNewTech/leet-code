def isValid(s: str) -> bool:
        stack = []
        close_to_open = {")" : "(", "]" : "[", "}" : "{"}

        for char in s:
            if char in close_to_open:
                if stack and stack[-1] == close_to_open[char]:
                    # print(char, stack[-1])
                    stack.pop()
                else:
                    print(False)
                    return False
            else:
                stack.append(char)

        if not stack:
            print(True)
            return True
        
        else: 
            print(False)
            return False
        
isValid("()")
isValid("()[]{}")
isValid("(]")