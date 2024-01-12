"""
49. Write a Python program to list all files in a directory.
"""

import os

ls = os.popen("ls")
print(ls.read())