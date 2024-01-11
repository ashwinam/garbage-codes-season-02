"""
47. Write a Python program to find out the number of CPUs used.
"""
# Import the 'multiprocessing' module to work with multi-processing features.
import multiprocessing

# Use 'multiprocessing.cpu_count()' to determine the number of available CPU cores.
cpu_count = multiprocessing.cpu_count()

# Print the number of CPU cores available on the system.
print(cpu_count)

import os

print(os.cpu_count())