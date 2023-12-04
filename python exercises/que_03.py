# Question 3
# Level 1

'''
Question: With a given integral number n, write a program to generate a dictionary that contains (i, i*i) such that is an integral number between 1 and n (both included). and then the program should print the dictionary. Suppose the following input is supplied to the program: 8 Then, the output should be: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}

Hints: In case of input data being supplied to the question, it should be assumed to be a console input. Consider use dict()
'''

def print_dict(inp):
    final_op = []
    for e_num in range(1, inp + 1):
        final_op.append((e_num, e_num * e_num))
    return dict(final_op)

def print_dict2(inpt):
    return {e_nu: e_nu * e_nu for e_nu in range(1, inpt+1)}

if __name__ == '__main__':
    user_inp = int(input("Please, Enter the number of your choice: "))
    output = print_dict2(user_inp)
    print(output, 'soln')