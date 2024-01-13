"""
52. Write a Python program to print to STDERR.
"""

# Import the 'print_function' feature from the '__future__' module to enable Python 3-style print function.
from __future__ import print_function

# Import the 'sys' module, which provides access to some variables used or maintained by the interpreter.
import sys

# Define a custom 'eprint' function that prints to the standard error stream.
def eprint(*args, **kwargs):
    # Call the 'print' function with the provided arguments and keyword arguments.
    # Use 'file=sys.stderr' to print to the standard error stream (stderr).
    print(*args, file=sys.stderr, **kwargs)

# Call the 'eprint' function with the specified arguments and separator.
eprint("abc", "efg", "xyz", sep="--")
