def isVowel(letter) -> bool:
    return letter in ['a', 'e', 'i', 'o', 'u']
def allVowels(word) -> list:
    vowel = []
    for letter in word:
        if isVowel(letter): vowel.append(letter)
    return vowel


print(allVowels("My name is Emerson Perez"))
# Working Correctly