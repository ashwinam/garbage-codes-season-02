# Question 2
# Level 1

'''
Question: Write a program which can compute the factorial of a given numbers. The results should be printed in a comma-separated sequence on a single line. Suppose the following input is supplied to the program: 8 Then, the output should be: 40320

Hints: In case of input data being supplied to the question, it should be assumed to be a console input.
'''

def calculate_factorial(inp):
    ans = 1
    for num in range(1, inp + 1):
        ans *= num
    return ans


if __name__ == '__main__':
    usr_inp = int(input("Enter the number: "))
    ans = calculate_factorial(usr_inp)
    print(ans, '*-*')
