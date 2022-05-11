function findLongestWord(str) {
    let strSplit = str.split(' ')
    let longestWord = 0
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
let myStr = "The quick brown fox jumped over the lazy dog"


function longWords(arr){
    let word = ''
    for(let i = 0; i < arr.length; i++){
        if (word.length < arr[i].length) {
            word = arr[i]
        }
    }
    return word.length
}
