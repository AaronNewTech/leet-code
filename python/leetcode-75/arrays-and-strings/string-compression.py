from typing import List

def compress(chars: List[str]) -> int:
        
        read = 0
        write = 0

        while read < len(chars):
            count = 0
            curr = chars[read]

            while read < len(chars) and chars[read] == curr:
                read += 1
                count += 1

            chars[write] = curr
            write += 1

            if count > 1:
                for num in str(count):
                    chars[write] = num
                    write += 1
        
        return write