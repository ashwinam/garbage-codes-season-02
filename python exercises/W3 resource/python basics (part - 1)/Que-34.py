"""
34. Write a Python program to sum two given integers. However, if the sum is between 15 and 20 it will return 20.

if sum > 15 and < 20
"""

sum_of = lambda a,b: a+b

output = sum_of(11, 5)

if output > 15 and output < 20:
    print(20)
else:
    print(output)
