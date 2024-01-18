def isValid(s: str) -> bool:
        # stack = []
        # close_to_open = {")" : "(", "]" : "[", "}" : "{"}

        # for char in s:
        #     if char in close_to_open:
        #         if stack and stack[-1] == close_to_open[char]:
        #             # print(char, stack[-1])
        #             stack.pop()
        #         else:
        #             print(False)
        #             return False
        #     else:
        #         stack.append(char)

        # if not stack:
        #     print(True)
        #     return True
        
        # else: 
        #     print(False)
        #     return False
        
        stack = []

        par_dict = { "{" : "}", "(" : ")", "[" : "]"}

        for char in s:
            if char in par_dict: 
                stack.append(par_dict[char])
            elif len(stack) == 0 or char!= stack.pop(): 
                # print(False)
                return False
        # print(True)
        return len(stack) == 0
        
print(isValid("()"))        # Output: True
print(isValid("()[]{}"))    # Output: True
print(isValid("(]"))         # Output: False
print(isValid("{}()[]"))     # Output: True
print(isValid("{()[]}"))     # Output: True
print(isValid("{([])}"))     # Output: True
print(isValid("{()[]"))      # Output: False