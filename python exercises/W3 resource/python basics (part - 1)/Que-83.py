"""
83. Write a Python program to test whether all numbers in a list are greater than a certain number.
"""

lst = [35, 45, 65, 89]
number = 30

def sample(lst, num):
    for n in lst:
        if n > num:
            continue
        else:
            print("Not all number are greater than certain number")
            break
    else:
        print("All numbers are greater than a certain number.")

sample(lst, number)