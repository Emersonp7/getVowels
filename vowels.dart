bool isVowel(String letter) {
  List<String> vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.contains(letter);
}

List<String> allVowels(String word) {
  List<String> vowels = [];
  for (int i = 0; i < word.length - 1; i++) {
    if (isVowel(word[i])) {
      vowels.add(word[i]);
    }
  }
  return vowels;
}

void main(List<String> args) {
  List<String> vowels = allVowels("perez");
  print(vowels);
}
