"""
110. Write a Python program to get numbers divisible by fifteen from a list using an anonymous function.
"""

an_lst = [15, 30, 45, 55, 80, 94, 36, 78]

an_fun = lambda a : a % 15 == 0
for i in an_lst:
    print(an_fun(i))


