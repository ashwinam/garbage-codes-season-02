"""
18. Write a Python program to calculate the sum of three given numbers. If the values are equal, return three times their sum.
"""

def is_values_equals(first, second, third):
    return first == second == third


first, second, third = 3, 3, 3

if is_values_equals(first, second, third):
    print(sum([first, second, third]) * 3)
else:
    print(sum([first, second, third]))