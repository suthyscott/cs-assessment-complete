// let count = 0

// const sumZero = arr => {
//     for(let i = 0; i < arr.length; i++){
//         count++
//         for(let j = i + 1; j < arr.length; j++){
//             count++
//             if(arr[i] + arr[j] === 0){
//                 return true
//             }
//         }
//     }

//     return false
// }

// sumZero([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
// console.log(count)
//time: O(n^2)
// space: O(1)



const uniqChars = str => {
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }

    return true
}

// time: O(n^2)
// space: O(n)

const isPangram = str => {
    str = str.toLowerCase().replace(/([^a-z])+/g, '')
    let map = {}

    for(let i = 0; i < str.length; i++){
        console.log(map)
        let letter = str[i]
        if(map[letter]){
            map[letter] += 1
        } else {
            map[letter] = 1
        }
    }

    let count = 0

    for(let key in map){
        count++
    }

    if(count >= 26){
        return true
    } else {
         return false
    }
}

isPangram("The quick brown fox jumps over the lazy dog!")

// time: O(n)
// space: O(n)

const findLongestWord = arr => {
    let result = 0
    arr.forEach(word => {
        if(word.length > result){
            result = word.length
        }
    })

    return result
}

// time: O(n)
// space: O(1)