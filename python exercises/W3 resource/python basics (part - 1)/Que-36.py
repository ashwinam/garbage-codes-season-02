"""
36. Write a Python program to add two objects if both objects are integers.
"""

a = 20
b = 30

def check_integer(obj):
    return isinstance(obj, int)

if check_integer(a) and check_integer(b):
    print(sum([a,b]))
else:
    print("Error!")