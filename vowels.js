function isVowel(letter){
    vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter);
}
const allVowels = word => {
    const vowel = []
    for (let i = 0; i < word.length; i++){
        if (isVowel(word[i])){
            vowel.push(word[i])
        }
    }     
    return vowel
}
console.log(allVowels("My name is Emerson Perez"))
// Working Correctly