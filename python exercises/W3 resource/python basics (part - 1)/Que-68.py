"""
68. Write a Python program to calculate sum of digits of a number.
"""

digit = 52658

def sum_of_digits(digits):
    sum_ = 0
    while digits > 0:
        remainder = digits % 10
        digits = digits // 10
        sum_ += remainder
    return sum_

print(sum_of_digits(digit))

