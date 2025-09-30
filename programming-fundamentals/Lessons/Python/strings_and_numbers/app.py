"""
PRIMITIVE (SIMPLE) DATATYPES
- Strings (str)
- Integers (int)
- Floats (float)
- Booleans (bool)
- None (NoneType)

"""

""" 
=== STRINGS ===
- A string is a sequence of characters enclosed in either single quotes ('...') or double quotes 
"""

# Literal assignment
greeting = "Hello world!"
print(greeting)

# String concatenation
first_name = "Jane"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)

# String interpolation (f-strings)
age = 30
intro = f"My name is {full_name} and I am {age} years old."
print(intro)

#print (f"{hello} big {world}")

# String methods
message = "  Hello, Python!  "
print(message.lower())        # hello, python!
print(message.upper())        # HELLO, PYTHON!
print(message.strip())        # "Hello, Python!"
print(message.replace("Python", "World"))  # "  Hello, World!  "
print(message.split(","))     # ['  Hello', ' Python!  ']
print(len(message))           # 18
print(message[2:7])          # "Hello"
print(message[::2])          # " Hlo yhn "
print(message[::-1])         # "  !nohtyP ,olleH  "
print(message.index("Python")) # 9
print(message.count("o"))    # 3
print("Hello" in message)      # True
print("hello" in message)      # False (case-sensitive)
print(message.startswith("  He")) # True
print(message.endswith("!  "))   # True
print(message.isalpha())      # False (contains spaces and punctuation)
print(message.isdigit())      # False (not a number)
print(message.isspace())      # False (contains non-space characters)
print(message.capitalize())   # "  hello, python!  "
print(message.title())        # "  Hello, Python!  "
print(message.center(30, "-")) # "--------  Hello, Python!  --------"
print(message.ljust(30, "-"))  # "  Hello, Python!  ------------"
print(message.rjust(30, "-"))  # "------------  Hello, Python!  "
print(message.encode())       # b'  Hello, Python!  '
print(message.expandtabs())  # "  Hello, Python!  " (no tabs to expand)
print(message.partition(",")) # ('  Hello', ',', ' Python!  ')
print(message.rpartition("!")) # ('  Hello, Python', '!', '  ')
print(message.zfill(25))     # "0000000000  Hello, Python!
print(message.swapcase())    # "  hELLO, pYTHON!  "
print(message.translate(str.maketrans("Hh", "Jj"))) # "  Jello, Python!  "
print(message.removeprefix("  ")) # "Hello, Python!  "
print(message.removesuffix("  ")) # "  Hello, Python!"
print(message.islower())     # False
print(message.isupper())     # False
print(message.isdecimal())   # False
print(message.isnumeric())   # False
print(message.isidentifier()) # False
print(message.casefold())    # "  hello, python!  "
print(message.partition("Python")) # ('  Hello, ', 'Python', '!  ')
print(message.rpartition("Hello")) # ('  ', 'Hello', ', Python!  ')
print(message.splitlines())  # ['  Hello, Python!  ']
print(message.removeprefix("  Hello,")) # " Python!  "
print(message.removesuffix("Python!  ")) # "  Hello, "
print(message.translate(str.maketrans("", "", " ,!"))) # "HelloPython"
print(message.encode("utf-8")) # b'  Hello, Python!  '
print(message.encode("utf-16")) # b'\xff\xfe \x00 \x00H\x00e\x00l\x00l\x00o\x00,\x00 \x00P\x00y\x00t\x00h\x00o\x00n\x00!\x00 \x00 \x00'
print(message.isprintable()) # True
print(message.isascii())    # True
print(message.removeprefix("  Hello, Python!  ")) # ""
print(message.removesuffix("  Hello, Python!  ")) # ""
print(message.translate(str.maketrans("Hh", "Jj", " ,!"))) # "JelloPython"
print(message.zfill(30))    # "0000000000000000  Hello, Python!  "
print(message.swapcase().swapcase()) # "  Hello, Python!  "
print(message.center(40).strip()) # "Hello, Python!"
print(message.ljust(40).strip())  # "Hello, Python!"
print(message.rjust(40).strip())  # "Hello, Python!"
print(message.encode().decode())  # "  Hello, Python!  "
print(message.expandtabs(4)) # "  Hello, Python!  " (no tabs to expand)
print(message.partition(" ")) # ('', ' ', ' Hello, Python!  ')
print(message.rpartition(" ")) # ('  Hello, Python!', ' ', '')
print(message.zfill(20))    # "000000000  Hello, Python!  "
print(message.swapcase().upper()) # "  HELLO, PYTHON!  "
print(message.swapcase().lower()) # "  hello, python!  "
print(message.translate(str.maketrans("Hh", "Jj")).replace("J", "H")) # "  Hello, Python!  "
print(message.removeprefix("  Hello, Python!  ").strip()) # ""
print(message.removesuffix("  Hello, Python!  ").strip()) # ""
print(message.translate(str.maketrans("", "", " ,!")).replace("Python", "World")) # "HelloWorld"
print(message.encode("utf-8").decode("utf-8")) # "  Hello, Python!  "
print(message.isprintable() and message.isascii()) # True
print(message.isascii() and message.isprintable()) # True
print(message.removeprefix("  Hello, Python!  ").strip() == "") # True
print(message.removesuffix("  Hello, Python!  ").strip() == "") # True

# String formatting with format()
template = "My name is {} and I am {} years old."
formatted = template.format(full_name, age)
print(formatted)    # My name is Jane Doe and I am 30 years old.        
# You can also use positional and keyword arguments
template2 = "My name is {name} and I am {age} years old."
formatted2 = template2.format(name=full_name, age=age)
print(formatted2)   # My name is Jane Doe and I am 30 years old 

# Escape sequences
escaped = "He said, \"It's a beautiful day!\"\nLet's enjoy it.\t"
print(escaped)  # He said, "It's a beautiful day!"
                # Let's enjoy it.       

# Raw strings (ignores escape sequences)
raw_string = r"C:\Users\JaneDoe\Documents\file.txt"
print(raw_string)  # C:\Users\JaneDoe\Documents\file.txt        

# list comprehensions with strings and numbers
# See ListComprehensions.py for examples    
# (also in the same directory as this file) 
import ListComprehensions       

# list methods
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5]
print(my_list.append(3))      # None (modifies the list in place)
print(my_list)                     # [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print(my_list.extend([5, 8, 9]))                    
# None (modifies the list in place)     
print(my_list)                     # [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]        
print(my_list.insert(0, 0))    # None (modifies the list in place)
print(my_list)
# [0, 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]
print(my_list.remove(1))       # None (modifies the list in place)
print(my_list)                     # [0, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]
print(my_list.pop())           # 9 (removes and returns the last item)
print(my_list)                     # [0, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
print(my_list.index(5))        # 4 (index of the first occurrence of 5)
print(my_list.count(5))        # 3 (number of occurrences of 5)
print(my_list.sort())          # None (modifies the list in place)
print(my_list)                     # [0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9]
print(my_list.reverse())       # None (modifies the list in place)
print(my_list)                     # [9, 8, 6, 5,       5, 5, 4, 3, 3, 2, 1, 0]             

print(len(my_list))            # 12 (number of items in the list)
print(min(my_list))            # 0 (smallest item in the list)
print(max(my_list))            # 9 (largest item in the list)
print(sum(my_list))            # 51 (sum of all items in the list)
print(sorted(my_list))        # [0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9] (returns a new sorted list)           
print(reversed(my_list))      # <list_reverseiterator object> (returns an iterator)
print(list(reversed(my_list))) # [0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9] (converts the iterator to a list)
print(my_list.copy())    # [9, 8, 6, 5, 5, 5, 4, 3, 3, 2, 1, 0] (returns a shallow copy of the list)        
print(my_list.clear())        # None (modifies the list in place)
print(my_list)                     # [] (the list is now empty) 
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5]
print(my_list * 2)            # [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 1, 4, 1, 5, 9, 2, 6, 5] (repeats the list)
print(3 in my_list)        # True (checks if 3 is in the list)
print(10 in my_list)       # False (checks if 10 is in the list)
print(3 not in my_list)    # False (checks if 3 is not in the list)
print(10 not in my_list)   # True (checks if 10 is not in the list)
print(list(enumerate(my_list))) 
# [(0, 3), (1, 1), (2, 4), (3, 1), (4, 5), (5, 9), (6, 2), (7, 6), (8, 5)] (returns an enumerate object)
print(list(zip(my_list, range(5)))) 
# [(3, 0), (1, 1), (4, 2), (1, 3), (5, 4)] (returns a zip object)
print(list(map(lambda x: x**2, my_list))) 
# [9, 1, 16, 1, 25, 81, 4, 36, 25] (applies a function to all items in the list)
print(list(filter(lambda x: x % 2 == 0, my_list))) 
# [4, 2, 6] (filters the list based on a condition)
print(list(range(5)))       # [0, 1, 2, 3, 4] (creates a list of numbers from 0 to 4)
print(list(range(1, 6)))    # [1, 2, 3, 4, 5] (creates a list of numbers from 1 to 5)
print(list(range(0, 10, 2))) # [0, 2, 4, 6, 8] (creates a list of even numbers from 0 to 8)
print(list(range(10, 0, -2))) # [10, 8, 6, 4, 2] (creates a list of even numbers from 10 to 2 in reverse order)
print(list(range(-5, 6)))   # [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5] (creates a list of numbers from -5 to 5)
print(list(range(-10, -1, 2))) # [-10, -8, -6, -4, -2] (creates a list of even numbers from -10 to -2)
print(list(range(-1, -10, -2))) # [-1, -3, -5, -7, -9] (creates a list of odd numbers from -1 to -9)
print(list(range(0)))       # [] (creates an empty list)
print(list(range(1)))       # [0] (creates a list with a single element 0)
print(list(range(2)))       # [0, 1] (creates a list with elements 0 and 1)
print(list(range(3)))       # [0, 1, 2] (creates a list with elements 0, 1, and 2)
print(list(range(1000000))) # [0, 1, 2, ..., 999999] (creates a list with a million elements - be careful with memory!)     