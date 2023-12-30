"""
5. Write a Python program that accepts the user's first and last name and prints them in reverse order with a space between them.
"""

name = "Ashwin Mandaokar"

first_name, last_name = name.split(" ")

print("{} {}".format(last_name, first_name))