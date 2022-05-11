let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('') //split turns a string into an array of substrings, and then returns the new array. 

const pangraminator = (string) => { //The pangraminator will take any string you put into it and tell you if it's a pangram or not.
    let str = string.toLowerCase(); //Whatever string you entered is given variable "str", and converted into lowercase.
    for (let i=0; i<alphabet.length; i++){ //for loop goes through the entire alphabet array shown at the top.
        if (str.indexOf(alphabet[i]) < 0) { //if your string is missing a character from the alphabet array (index -1), it returns false.
            return false;
        }
    }
    return true; //if the for loop makes it to the end, it returns true. Congrats, your string is a pangram. Now all that's left is death!
}
pangraminator("The quick brown fox jumps over the lazy dog")