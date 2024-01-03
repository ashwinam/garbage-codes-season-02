"""
21. Write a Python program that determines whether a given number (accepted from the user) is even or odd, and prints an appropriate message to the user.
"""

def is_even(number):
    return number % 2 == 0

user_inp = int(input("Enter a number of your choice:\n"))

if is_even(user_inp):
    print(f"The number {user_inp} is a even number")
else:
    print(f"The number {user_inp} is a odd number")