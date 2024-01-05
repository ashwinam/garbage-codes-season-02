"""
26. Write a Python program to create a histogram from a given list of integers.
Ex:-
char = @
[2, 3, 4, 2]

histogram
@@
@@@
@@@@
@@

char * i
"""

def print_histogram(char, lst_of_val):
    for each_val in lst_of_val:
        print(char * each_val)

print_histogram("*", [2,3,6,5])