"""
23. Write a Python program to get n (non-negative integer) copies of the first 2 characters of a given string. Return n copies of the whole string if the length is less than 2.
"""

number_of_copies = 2

string = "hello"

if len(string) > 0:
    print(string[:2] * number_of_copies)
else:
    print(string * number_of_copies)