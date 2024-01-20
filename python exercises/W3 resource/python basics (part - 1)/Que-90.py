"""
90. Write a Python program to create a copy of its own source code.

steps:
1. read the file 
2. copy the file 
3. paste the content from this file to another file
"""

def copy_source_code(file1, file2):
    """
    file1: This file is the file that source code exists

    file2: second file is the destination file where first file need to be copied
    """

    with open(file1, 'r') as f_file:
        file_content = f_file.readlines()

    with open(file2, 'w') as s_file:
        s_file.writelines(file_content)

copy_source_code('Que-84.py', 'destination_file.txt')

