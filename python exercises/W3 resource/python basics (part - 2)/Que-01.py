"""
1. Write a Python function that takes a sequence of numbers and determines whether all the numbers are different from each other.
"""

def func(*args):
    return len(args) == len(set(args))

print(func(1, 3, 55, 4, 30))