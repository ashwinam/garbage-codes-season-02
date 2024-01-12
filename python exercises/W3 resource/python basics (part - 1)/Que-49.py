"""
49. Write a Python program to list all files in a directory.
"""

from genericpath import isfile
import os

ls = os.popen("ls")
# print(ls.read())

# other solution

cwd = os.getcwd()

for file in os.listdir():
    if os.path.isfile(file):
        print(file)