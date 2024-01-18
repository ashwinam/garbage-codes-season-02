"""
84. Write a Python program to count the number of occurrences of a specific character in a string.
"""

string = "assassination"

char = "s"

occurances = dict()

for each_char in string:
    if each_char in occurances:
        occurances[each_char] += 1
    else:
        occurances[each_char] = 1

print(occurances[char])

# using collection module

from collections import Counter


print(Counter(string)[char])