"""
78. Write a Python program to find the available built-in modules.
"""

import sys
DELIMETER = ", "
print(DELIMETER.join(sys.builtin_module_names))