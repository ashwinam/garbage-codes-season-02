"""
58. Write a Python program to sum the first n positive integers.
"""


def sum_n_integers(n: list):
    return sum(n)

print(sum_n_integers(range(11)))

# Solution from w3 resource

# Prompt the user for input and convert it to an integer.
n = int(input("Input a number: "))

# Calculate the sum of the first 'n' positive integers using the formula.
sum_num = (n * (n + 1)) / 2

# Print the result, indicating the sum of the first 'n' positive integers.
print("Sum of the first", n, "positive integers:", sum_num)


