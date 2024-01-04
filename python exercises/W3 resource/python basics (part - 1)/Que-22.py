"""
22. Write a Python program to count the number 4 in a given list.
"""

count_numb = 4

random_lst = [1,2,3,4,5,6,4,5,7,4,8,6,4]

def count_numbers(number, lst):
    count = 0
    for each_num in lst:
        if each_num == number:
            count += 1
    return count

output = count_numbers(4, random_lst)
print(output)