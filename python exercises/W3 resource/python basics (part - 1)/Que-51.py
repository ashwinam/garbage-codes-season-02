"""
51. Write a Python program to determine the profiling of Python programs.
Note: A profile is a set of statistics that describes how often and for how long various parts of the program executed. These statistics can be formatted into reports via the pstats module.
"""

# Import the cProfile module, which provides a way to profile Python code.
import cProfile
# Define a function named 'sum'.
def sum():
   # Print the result of adding 1 and 2 to the console.
   print(1 + 2)
# Use cProfile to profile the 'sum' function.
cProfile.run('sum()')
