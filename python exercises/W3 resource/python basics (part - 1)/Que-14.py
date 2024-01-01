"""
14. Write a Python program to calculate the number of days between two dates.
Sample dates : (2014, 7, 2), (2014, 7, 11)
Expected output : 9 days
"""

import datetime


first_date = datetime.datetime(2014, 7, 2)
second_date = datetime.datetime(2014, 7, 11)
print(second_date-first_date)