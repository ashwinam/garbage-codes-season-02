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