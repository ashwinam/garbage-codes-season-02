"""
27. Write a Python program that concatenates all elements in a list into a string and returns it.
"""

def concatenate_list_elements(lst):
    return "".join(lst)

list_of_elements = ['a', 's', 'h', 'w', 'i', 'n']

output = concatenate_list_elements(list_of_elements)

print(output)