package GetVowels;
import java.util.ArrayList;
import java.util.List;
public class vowels {
    static public boolean isvowel(char letter){
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        for (char vowel :  vowels){
            if (letter == vowel){
            return true;
            }
        }
        return false;
    }
    static public List<Character> allVowels(String word){
        List<Character> vowels = new ArrayList<>();
        for (int i = 0; i < word.length(); i++){
            if (isvowel(word.charAt(i))){
                vowels.add(word.charAt((i)));
            }
        }
        return vowels;
    }
    public static void main(String[] args){
        String word = "my name is Emerson Perez";
        System.out.println(allVowels(word));
    }
}
// Working Correctly