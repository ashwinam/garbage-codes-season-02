# Question 05
# Level 1

'''
Question: Define a class which has at least two methods: getString: to get a string from console input printString: to print the string in upper case. Also please include simple test function to test the class methods.

Hints: Use init method to construct some parameters
'''

class StringClass:
    def __init__(self) -> None:
        self.string = ''
    
    def getString(self):
        inp = input('Enter the string: ')
        self.string = inp

    def printString(self):
        return self.string.upper()
    
if __name__ == '__main__':
    main = StringClass()
    main.getString()
    output = main.printString()
    print(output)