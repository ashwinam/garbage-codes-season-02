"""
6. Write a Python program that accepts a sequence of comma-separated numbers from the user and generates a list and a tuple of those numbers.
Sample data : 3, 5, 7, 23
Output :
List : ['3', ' 5', ' 7', ' 23']
Tuple : ('3', ' 5', ' 7', ' 23')
"""

sample_data = '3, 5, 7, 23'

lst_view = sample_data.split(',')
print(lst_view)

tple_view = tuple(lst_view)
print(tple_view)