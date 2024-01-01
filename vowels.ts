function isvowel(letter : string) : boolean{
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(letter);
}
const AllVowels = (word : string) : Array<string> => {
    let vowels : Array<string> = [];
    for (let i : number = 0; i < word.length - 1; i ++){
        if (isvowel(word[i])) vowels.push(word[i]);
    }
    return vowels
}
const word : string = "perez";
const v : Array<string> = AllVowels(word)

console.log(v)