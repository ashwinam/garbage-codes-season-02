"""
24. Write a Python program to test whether a passed letter is a vowel or not.
"""

vowels = "aeiou"

def isLetterAVowel(letter):
    return letter in vowels

print(isLetterAVowel("o"))