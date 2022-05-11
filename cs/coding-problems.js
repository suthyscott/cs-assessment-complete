const addToZero = arr => {
    for(let i = 0; i< arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            console.log('arr i',arr[i], 'j', arr[j])
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

// addToZero([5, 1, 1, -5])
// console.log(addToZero([1, 2, 3]))
// The above function has a time complexity of O(n^2)
// space complexity O(n) because the space required corresponds to a single input value


const hasUniqueChars = (str) => {
    for(let i = 0; i <str.length;i++){
        for(let j=i+1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// console.log(hasUniqueChars('monday'))
// Time complexity O(n^2)
// space complexity O(n) for same reasons as above

const isPangram = str =>{
    str = str.toLowerCase().split('')
    const alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0, 
        f: 0,
        g: 0, 
        h: 0, 
        i: 0,
        j: 0,
        k: 0, 
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }

    for(let i = 0; i<str.length;i++){
        if(alphabet[str[i]] === 0){
            alphabet[str[i]] += 1
        }
    }
    for(let key in alphabet){
        if(alphabet[key] === 0){
            return false
        }
    }
    return true
}
// console.log(isPangram('Waltz, nymph, for quick jigs vex Bud'))
// Time complexity O(n) Linear
// Space complexity O(n) 

const findLongestWord = arr => {
    let longestLength = 0
    arr.forEach(e =>{
        if(e.length > longestLength){
            longestLength = e.length
        }
    })
    return longestLength
}

// console.log(findLongestWord(["hi", "hello", 'longer']))
// time complexity is O(n)
// space complexity O(n)