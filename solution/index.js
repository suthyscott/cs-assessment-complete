//solutions for part 3 with time complexities

///////////////////////////////////////////////
//ADD TO ZERO 

// function addToZero(arr) {
//   if (arr.length < 2) {
//     return false
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return true
//       }
//     }
//   }

//   return false
// }
//O(n log n)

// function addToZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0 && i !== j) {
//         return true
//       }
//     }
//   }
// }
// O(n^2)

// addToZero([9,8,7,6,5, -7])

// function addToZero(arr) {
//   let numObject = {};
//   // would need to handle for if there's a single 0 in the arr
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     numObject[num] = num;
//   }

//   for (var i = 0; i < arr.length; i++) {
//     let opposite = 0 - arr[i];

//     if (numObject.hasOwnProperty(opposite)) {
//       return true;
//     }
//   }

//   return false
// }

// addToZero([1,2,3,0])

// function addsToZero(arr, sum) {
//   let s = new Set();
//   for (let i = 0; i < arr.length; ++i) {
//     let temp = sum - arr[i];

//     // checking for condition
//     if (s.has(temp)) {
//       return "true";
//     }

//     s.add(arr[i]);

//     console.log(s)
//   }
//   return "false";
// }

// const array = [1, 2, 3, 5, 7, 3, 10, 0];

// addsToZero(array, 0)

///////////////////////////////////////////////
//UNIQUE CHARS


// function hasUniqueChars(str) {
//   let letters = {}

//   for (let i = 0; i < str.length; i++) {
//     if (letters[str[i]]) {
//       return false
//     } else {
//       letters[str[i]] = 1
//     }
//   }

//   return true
// }
//O(n)

///////////////////////////////////////////////
//PANGRAM

// function isPangram(str) {
//   str = str.toLowerCase().replace(/([^a-z])+/g, '')
//   let letters = {}

//   for (let i = 0; i < str.length; i++) {
//     if (!letters.hasOwnProperty(str[i])) {
//       letters[str[i]] = 1
//       console.log(letters)
//     }
//   }

//   // for (let i = 0; i < str.length; i++) {
//   //   if (letters.hasOwnProperty(str[i])) {
//   //     letters[str[i]]++
//   //   } else {
//   //     letters[str[i]] = 1
//   //   }
//   // }

//   console.log(Object.keys(letters))

//   if (Object.keys(letters).length === 26) {
//     return true
//   } else {
//     return false
//   }
// }

// isPangram('qwertyuiopasdfhjklzxcvbnm')

// function findLongestWord(arr) {
//   let longest = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (longest.length < arr[i].length) {
//       longest = arr[i]
//     }
//   }

//   return longest.length
// }
//O(n)

// ['sahfbd', 'dsa', 'gfrueigberuiabg', 'a']


///////////////////////////////////////////////
//LONGEST WORD

// function isLongestWord(arr) {
//   arr.sort((a, b) => b.length - a.length)

//   return arr[0].length
// }
//O(n log n)

function findLongestWord(words) {
    wordLength = []
  
    for (let i = 0; i < words.length; i++) {
      let noSpace = words[i].replace(/\s/g, '');
      let num = noSpace.length
      wordLength.push(num)
    }
  
    console.log(Math.max.apply(Math, wordLength))
  }
  
  // let wordArr = ['hello', 'goodbye', 'good afternoon']
  
  // findLongestWord(wordArr)
  //o(n)