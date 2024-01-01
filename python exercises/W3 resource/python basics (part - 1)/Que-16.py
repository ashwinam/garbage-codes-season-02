"""
16. Write a Python program to calculate the difference between a given number and 17. If the number is greater than 17, return twice the absolute difference.

# 14 - 17 = -3
# 22 - 17 = 5 * 2 = 10
"""

def samp_func(given_num):
    if given_num < 17:
        ans = given_num - 17
        return abs(ans)
    return (given_num - 17) * 2

print(samp_func(14))
print(samp_func(22))