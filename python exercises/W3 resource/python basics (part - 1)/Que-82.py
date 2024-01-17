"""
82. Write a Python program to calculate the sum of all items of a container (tuple, list, set, dictionary).
"""

# tuple

nums = 1, 2, 3, 4

print(sum(nums))

# list

nums = [4, 5, 8, 96]

print(sum(nums))

# set

nums = {1, 2, 3, 5, 6, 6}

print(sum(nums))

# Dictionary

nums = {
    'a': 100,
    'b': 500,
    'c': 800
}

print(sum(nums.values()))