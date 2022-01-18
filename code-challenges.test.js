// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeWord", () => {
    it("takes a string, returns a coded message. 'a' becomes 4, 'e' becomes 3, 'i' becomes 1, and 'o' becomes 0.", () => {
      expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

const codeWord = (string) => {
    let stringArray = string.split("")
    let newCodeLet = stringArray.map(value => {
        if(value === "a" || value === "A"){ return 4 }
        else if(value === "e" || value === "E") { return 3 }
        else if(value === "i" || value === "I") { return 1 }
        else if (value === "o" || value === "O") { return 0 }
        else { return value }
    })
        return newCodeLet.join("")
  }

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordArray", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
      expect(wordArray(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(wordArray(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

const wordArray = (array, letter) => {
    let newWordArray = array.filter(value => {
      return value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase())
    })
      return newWordArray
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.


// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
})

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
    let count = 0;
    if ([...new Set(array)].length === 2) {
       for (let i = 0; i < array.length; i++) {
         if (array[i] === array[0]) {
          count++;
         }
       }
         return count === 2 || count === 3;
       }
       else {
         return false;
       }
}
