"""
19. Write a Python program to get a newly-generated string from a given string where "Is" has been added to the front. Return the string unchanged if the given string already begins with "Is".
"""

def checkBeginningWordIs_Is(string):
    first_two_chars = string[:2]
    return "Is" == first_two_chars

def generate_string(string):
    if checkBeginningWordIs_Is(string):
        return string
    return "Is" + string

output = generate_string("IsEmpty!")
print(output, ">>>>")