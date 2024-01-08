"""
35. Write a Python program that returns true if the two given integer values are equal or their sum or difference is 5.
"""

def return_true(a,b):
    return a == b or a + b == 5 or abs(a - b) == 5

print(return_true(7, 2))