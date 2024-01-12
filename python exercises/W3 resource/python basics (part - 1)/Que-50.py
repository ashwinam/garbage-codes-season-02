"""
50. Write a Python program to print without a newline or space.
"""

string = """
47. Write a Python program to find out the number of CPUs used.
Click me to see the sample solution

48. Write a Python program to parse a string to float or integer.
Click me to see the sample solution
"""

print("".join([e_line.strip() for line in string.split("\n") for e_line in line.strip().split(" ")]))

# Based on w3resource implementation

# Iterate through a range of numbers from 0 to 9 (inclusive).
for i in range(0, 10):
    # Print an asterisk '*' character on the same line using the 'end' parameter.
    print('*', end="")
# Print a newline character to move to the next line.
print("\n")