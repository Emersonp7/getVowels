#include <iostream>
#include <list>
using namespace std;
bool isVowel(char letter){
    char vowels[] = {'a', 'e', 'i', 'o', 'u'};
    for (char val : vowels){
        if (val == letter){
            return true;
        }
    }
    return false;
}
list<char> allVowels(const char word[]){
    list<char> vowel = {};
    while (*word){
        char cc = *word;
        if (isVowel(cc)){
            vowel.push_back(cc);
        }
        ++word;
    }
    return vowel;
}
int main(){
    list<char> word = allVowels("My name is Emerson Perez");
    cout << "[";
    int i = 0;
    for (char let : word){
        i++;
        if (i != word.size()){
        cout << "'" << let << "'" << ", "; }
        else {
            cout << "'" << let << "'";
        }
    }
    cout << "]";
}
// Working Correctly