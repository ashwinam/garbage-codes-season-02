"""
69. Write a Python program to sort three integers without using conditional statements and loops.
"""

l = 3, 2, 1

minimum = min(l)
maximum = max(l)

midle = sum(l) - minimum - maximum

print(minimum, midle, maximum)