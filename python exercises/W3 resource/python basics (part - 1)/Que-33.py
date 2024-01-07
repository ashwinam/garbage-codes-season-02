"""
33. Write a Python program to sum three given integers. However, if two values are equal, the sum will be zero.
"""


_sum = 0

a, b, c = 1, 2, 3

if (a == b or b == c or c == a):
    print(_sum)
else:
    print(sum([a,b,c]))