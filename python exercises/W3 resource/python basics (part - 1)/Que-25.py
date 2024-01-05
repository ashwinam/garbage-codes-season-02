"""
25. Write a Python program that checks whether a specified value is contained within a group of values.
Test Data :
3 -> [1, 5, 8, 3] : True
-1 -> [1, 5, 8, 3] : False
"""

def is_value_inside_group(value, group):
    return value in group

output = is_value_inside_group(-1, [1,5,8,3])
print(output)