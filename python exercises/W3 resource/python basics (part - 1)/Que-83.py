"""
83. Write a Python program to test whether all numbers in a list are greater than a certain number.
"""

lst = [35, 45, 65, 89]
number = 30

def sample(lst, num):
    for n in lst:
        if n > num:
            continue
        else:
            print("Not all number are greater than certain number")
            break
    else:
        print("All numbers are greater than a certain number.")

sample(lst, number)

# solution from sources 
# Create a list 'num' containing integer values.
num = [2, 3, 4, 5]

# Print a blank line for better readability.
print()

# Check if all elements in the 'num' list are greater than 1 and print the result.
print(all(x > 1 for x in num))

# Check if all elements in the 'num' list are greater than 4 and print the result.
print(all(x > 4 for x in num))

# Print a blank line for better readability.
print()
