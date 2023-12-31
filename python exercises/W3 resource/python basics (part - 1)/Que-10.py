"""
10. Write a Python program that accepts an integer (n) and computes the value of n+nn+nnn.
Sample value of n is 5
Expected Result : 615
"""

inp = 5
# inp + inpinp + inpinpinp # 5+55+555

print(eval(f"{inp}+{inp}{inp}+{inp}{inp}{inp}")) 