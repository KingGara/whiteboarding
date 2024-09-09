/*
 Problem Solving Algorithm
 --------------------------
    1.) Understand the problem
    2.) Devise a plan
    3.) Carry out the plan
    4.) Refactor
*/

/*
    logBetween - 
        Define a function that will return an array from lowNum to highNum,
        inclusive. 

        Time Complexity: O(n)
        Space Complexity: O(n)
*/
const logBetween = (low, high) => {
     let result = [];

    for(let i = low; i <= high; i++) {
        result.push(i)
    };

    return result;
};
console.log("logBetween")
console.log("-------------")
console.log(logBetween(-1, 2)); // [-1, 0, 1, 2]
console.log(logBetween(14, 6)); // []
console.log(logBetween(4, 6)); // => [4, 5, 6]
console.log(" ");



/*
    logBetweenStepper - 
        Write a function that takes in three numbers as parameters.
        the function should return an array of numbers between min and max
        at step intervals.

        Time Complexity: O(n)
        Space Complexity: O(n)
*/
const logBetweenStepper = (low, high, step) => {
    let result = [];

    for(let i = low; i <= high; i += step) {
        result.push(i);
    };

    return result;
};
console.log("logBetweenStepper");
console.log("-------------");
console.log(logBetweenStepper(5, 9, 1)); // [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // [-10, -5, 0, 5, 10, 15]
console.log(" ");



/*
    printReverse - 
        Write a function that returns an array of all numbers from max - min
        in reverse order.

        Time Complexity: O(n)
        Space Complexity: O(n)
*/

const printReverse = (min, max) => {
    let result = [];

    for(let i = max - 1; i > min; i--) {
        result.push(i);
    };

    return result;
};
console.log("printReverse");
console.log("-------------");
console.log(printReverse(13, 18)); // [17, 16, 15, 14]
console.log(printReverse(90, 94)); // [93, 92, 91]
console.log(" ");


/*
    fizzBuzz - 
        Write a function that takes a number and returns an array of every
        number from 0 to max that is divisible by either 3 or by 5, but not
        both.

        Time Complexity: O(n)
        Space Complexity: O(n)
*/

const fizzBuzz = (num) => {
    let result = [];

    for(let i = 0; i < num; i++) {
        //if((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0))
        if(i % 3 === 0 ^ i % 5 === 0) {
            result.push(i)
        }
    };
    return result;
};
console.log("fizzBuzz");
console.log("-------------");
console.log(fizzBuzz(20)); // [3, 5, 6, 9, 10, 12, 18]
console.log(" ");


/*
    isPrime - 
        Write a function that returns true if a number is prime. Otherwise,
        false. Assume number is a postive integer

        Time Complexity: O(n)
        Space Complexity: O(1)
*/

const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    let sqrt = Math.floor(Math.sqrt(num));
    for(let i = 3; i <= sqrt; i += 2) {
        if(num % i === 0) return false 
    }
    return true;
};
console.log("isPrime");
console.log("-------------");
console.log(isPrime(2)); // true
console.log(isPrime(10)); // false
console.log(isPrime(11)); // true
console.log(isPrime(9)); // false
console.log(isPrime(2017)); // true
console.log(" ");



/*
    maxValue - 
        Write a function that returns the largest value in an array.
        Assume array is an array of numbers.
    
        Time Complexity: O(n)
        Space Complexity: O(1)
*/

const maxxValue = (array) => {
    if(array.length === 0) return null
    return Math.max(...array);
}

const maxValue = (array) => {
    if(array.length === 0) return null

    let max = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max
}



console.log("maxValue");
console.log("-------------");
console.log(maxValue([12, 6, 43, 2]));
console.log(maxValue([]));
console.log(maxValue([-4, -10, 0.42]));
console.log(" ");



/*
    myIndexOf - 
        Write a function that takes in an array of numbers and a target number
        as arguments. It should return the index value of the target if it is 
        present in the array or -1 if it is not present. 

        Do Not use indexOf or includes method
    
        Time Complexity: O()
        Space Complexity: O()
*/



const myIndexOf = (array, target) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i
        }
    }
    return -1
}

console.log("myIndexOf");
console.log("-------------");
console.log(myIndexOf([1, 2, 3, 4], 4)) // 3
console.log(myIndexOf([5, 6, 7, 8], 2)) // -1
console.log(" ");



/*
    factorArray - 
        Write a function that takes in an array of numbers and a target number
        as arguments. It should return the index value of the target if it is 
        present in the array or -1 if it is not present. 

        Do Not use indexOf or includes method
    
        Time Complexity: O(n)
        Space Complexity: O(n)
*/

const factorArray = (array, number) => {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        if(number % array[i] === 0) {
            result.push(array[i]);
        }
    }

    return result
}
console.log("factorArray");
console.log("-------------");
console.log(factorArray([2, 3, 4, 5, 6], 20)); // [2, 4, 5]
console.log(factorArray([2, 3, 4, 5, 6], 35)); // [5]
console.log(factorArray([])); // []
console.log(" ");



/*
    oddRange - 
        Write a function that takes in a number and returns an array containing
        all postive odd numbers up to end.

    
        Time Complexity: O(n)
        Space Complexity: O(n)
*/

const oddRange = (end) => {
    let result = [];

    for(let i = 1; i <= end; i++) {
        if(i % 2 !== 0) {
            result.push(i);
        };
    };
    return result
};
console.log("oddRange");
console.log("-------------");
console.log(oddRange(13)); // [1, 3, 5, 7, 9, 11, 13]
console.log(oddRange(6)); // [1, 3, 5]
console.log(" ");
console.log(" ");



/*
    reverseHyphenString - 
        Write a function that takes in a hypenated string and returns the
        hypenated string reversed.

    
        Time Complexity: O(n)
        Space Complexity: O(n)
*/

const reverseHyphenString = (string) => {
    let result = [];
    let revString = string.split("-");
    
    for(let i = revString.length - 1; i >= 0; i--) {
        result.push(revString[i]);
    }
    result = result.join("-");
    return result
};
console.log("reverseHyphenString");
console.log("-------------");
console.log(reverseHyphenString("Go-to-the-store")) // "store-the-to-go"
console.log(reverseHyphenString("Jump,-jump-for-joy")) // "joy-for-jump-Jump,"
console.log(" ");
console.log(" ");



/*
    intersect - 
        Write a function that takes in two arrays and returns a new array 
        containing the elements common to both arr1 and arr2. 

    
        Time Complexity: O(n + m) 
            Creating the set takes O(n) & filtering 'arr2' takes O(m)

        Space Complexity: O(n)
            the new array returned cannot be any larger than the two given
*/

//const intersect = (arr1, arr2) => {
//    let unique = [];
//    let comboArray = arr1.concat(arr2);
//
//    for(let i = 0; i < comboArray.length; i++) {
//        if(!unique.includes(comboArray[i])) {
//            unique.push(comboArray[i])
//            comboArray.splice(i, 1);
//            i--;
//        }
//    }
//    return comboArray;
//};

const intersect = (arr1, arr2) => {
    const set1 = new Set(arr1);

    const intersection = arr2.filter(item => set1.has(item));
    return intersection;
};

console.log("intersect");
console.log("-------------");
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // ['b', 'd']
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // []
console.log(" ");
console.log(" ");



/*
    mirrorArray - 
        Write a function that takes in an array as an argument and returns a 
        new array 'mirrored'.
    
        Time Complexity: O(n) 

        Space Complexity: O(1) [O(n)]

*/

const mirrorrArray = (array) => {

    for(let i = array.length - 1; i >= 0; i--) {
        array.push(array[i]);
    }
    return array
};

const mirrorArray = (array) => {
    return array.concat(array.slice().reverse());
}
console.log("mirrorArray");
console.log("-------------");
console.log(mirrorArray([1, 2, 3])); // [1, 2, 3, 3, 2, 1]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // [a, b, c, d, d, c, b, a]
console.log(" ");
console.log(" ");



/*
    abbreviate - 
        Write a function that takes in a sentence string and returns a new 
        sentence where words longer than 4 characters have their vowels removed
        Assume the sentence has all lowercase characters.
    
        Time Complexity: O(n) 

        Space Complexity: O(n)

*/

const abbreviate = (sentence) => {
    let vowles = ['a', 'e', 'i', 'o', 'u'];
    let words = sentence.split(" ");

    for(let i = 0; i < words.length - 1; i++) {
        if(words[i].length > 3) {
            let letters = words[i].split("");
            letters = letters.filter(char => !vowles.includes(char));
            words[i] = letters.join("");
        }
    }
    let newSentence = words.join(" ");
    return newSentence;
};
console.log("abbreviate");
console.log("-------------");
console.log(abbreviate('the bootcamp is fun')); // 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // 'hll wrld'
console.log(abbreviate('how are you')); // 'how are you'
console.log(" ")
console.log(" ");


/*
    adults - 
        Write a function that takes in an array of person objects. The 
        function should return an array containing the names of those who
        have an age of 18 or higher.
    
        Time Complexity: O(n) 

        Space Complexity: O(n)
*/

// Using built in methods
const adultsss = (people) => {
    return people
                .filter(person => person.age >= 18)
                .map(person => person.name);
};
// Using a for...of loop
const adultss = (people) => {
    const adultNames = [];
    for(const person of people) {
        if(person.age >= 18) {
            adultNames.push(person.name);
        }
    }
    return adultNames;
};
// Using forEach
const adults = (people) => {
    const adultNames = [];

    people.forEach(person => {
        if(person.age >= 18) {
            adultNames.push(person.name);
        }
    });
    return adultNames;
};
const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
];
console.log("adults");
console.log("-------------");
console.log(adults(ppl)); // ['John', 'Jane']
console.log(" ")
console.log(" ");



/*
    countScores - 
        Write a function that takes in an array of score objects, people,
        as its input. A score object, people, has two key-value pairs: a name 
        (string) and a score (number). countScores(people) should return an
        object that has key-value pairs where each name is a key and the value
        is their total score.
    
        Time Complexity: O(n) 

        Space Complexity: O(n)? (k)
            Where k is the number of unique names in the people AOB
*/

const countScores = (people) => {
    return people.reduce((scoreObj, person) => {
        if(scoreObj[person.name]) {
            scoreObj[person.name] += person.score
        } else {
            scoreObj[person.name] = person.score
        }
        return scoreObj
    },{});
};


const pppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 },
];
console.log("countScores");
console.log("-------------");
console.log(countScores(pppl)); // { Anthony: 2, Fred: 10, Winnie: 12 }

const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
];
console.log(countScores(peeps));
console.log(" ")
console.log(" ");



/*
    firstNPrimes - 
        Using the isPrime function, write a function that returns an array of 
        the first n prime numbers
    
        Time Complexity: O(n^2)? 

        Space Complexity: O(n)
*/

const firstNPrimes = (n) => {
    let count = 0;
    let result = [];

        for(let i = 0; count < n; i++) {
            if(isPrime(i)) {
                result.push(i);
                count++;
            }
        }
    return result;
};
console.log("firstNPrimes");
console.log("-------------");
console.log(firstNPrimes(0)); // []
console.log(firstNPrimes(1)); // [2]
console.log(firstNPrimes(4)); // [2, 3, 5, 7]
console.log(" ");
console.log(" ");



/*
    peakFinder - 
        Write a function that takes in an array of numbers. It should return an 
        array containing the indices of all the peaks. A peak is an element
        that is greater than both of it neighbors. If it is the first or last 
        element, it is a peek if its greater than its one neighbor. Assume the 
        array has a length of at least 2.
    
        Time Complexity: O(n)

        Space Complexity: O(n)
*/

const peakFinder = (array) => {
    let result = [];
    
    if(array[0] > array[1]) {
        result.push(0)
    }

    for(let i = 1; i < array.length - 2; i++) {
        if(array[i] > array[i-1] && array[i] > array[i+1]) {
            result.push(i)
        }
    }

    if(array[array.length-1] > array[array.length-2]) {
        result.push(array.length-1);
    }

    return result;
};
console.log("peakFinder");
console.log("-------------");
console.log(peakFinder([1, 2, 3, 2, 1])); // [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // [2, 6, 8]
console.log(" ");
console.log(" ");


/*
    divisibleByThreePairSum - 
        Write a function that takes an array of numbers. It should return an
        array of all pairs of indices, whose elements sum to a multiple of 3.
    
        Time Complexity: O(n^2)

        Space Complexity: O(n^2)
*/

const divisibleByThreePairSum = (array) => {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if((array[i] + array[j]) % 3 === 0) {
                result.push([i,j]);
            };
        };
    };
    return result;
};

const divisibleByThreePairSumm = (array) => {
    const result = [];

    array.forEach((num1, i) => {
        array.slice(i + 1).forEach((num2, j) => {
            if((num1 + num2) % 3 === 0) {
                result.push([i, i + 1 + j]);
            }
        });
    });
};

console.log("divisibleByThreePairSum");
console.log("-------------");
console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
// [[0, 4,], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2])); // [[1,3]]
console.log(" ");
console.log(" ");



/*
    zipArray - 
        Write a function that takes in two arrays and "zips" them together by
        returning a single 2D-array. Assume that both input arrays have the same
        length.
    
        Time Complexity: O(n)

        Space Complexity: O(n)
*/
const zipArray = (arr1, arr2) => {
    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        result.push([arr1[i], arr2[i]]);
    };
    return result;
};
console.log("ziparray");
console.log("-------------");
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];
console.log(zipArray(a1, a2));
console.log(" ");
console.log(" ");

/*
    twoDimensionalTotal - 
        Write a function that takes in a 2D array of numbers and returns the 
        total sum of all elements.
    
        Time Complexity: O(n * m)

        Space Complexity: O(1)
*/

const twoDimensionalTotal = (array) => {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            total += array[i][j];
        }
    }
    return total
};

const twoDimensionalTotall = (array) => {
    return array.reduce((total, subArray) => {
        return total + subArray.reduce((subTotal, num) => subTotal + num);
    }, 0)
};

console.log("twoDimensionalTotal");
console.log("-------------");
const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];
console.log(twoDimensionalTotal(arr1)); // 40
const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
];
console.log(twoDimensionalTotal(arr2)); // 15
console.log(" ");



/*
    countInnerElement - 
        Write a function that takes a 2-D array of elements. each element of
        arr is a sub array that contains multiple elements. The number of
        elements contained in each sub array are not the same. You can assume
        each sub array contains at least one element. You should return an
        object that counts how many times each element in each sub array repeats.
       
       Complexity: O(n * m)

        Space Complexity: O(n) (E)?
        where E is the number of unique elements across all subarrays
*/

const countInnerElement = (arr) => {
    let object = {};

    arr.forEach((array) => {
        array.forEach((element) => {
            if(object[element]) {
                object[element]++;
            } else {
                object[element] = 1;
            }
        })
    })
    return object;
};
console.log("countInnerElement");
console.log("-------------");
const aa1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
]
console.log(countInnerElement(aa1)); // {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
const aa2 = [
    ['a', 'b', 'c', 'd'],
    ['a', 'b'],
    ['a', 'c', 'd', 'a']
]
console.log(countInnerElement(aa2)); // {a: 4, b: 2, c: 2, d: 2}
console.log(" ");
console.log(" ");



/*
    twoDiff - 
       Write a function, given an array of numbers, return a 2-D array, where
       each of the sub array are indices of the two numbers such that their
       difference is 2. If there are no such numbers, return an empty array.
       
        Time Complexity: O(n^2)

        Space Complexity: O(n)
*/

const twoDiff = (array) => {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] - array[i] === 2 || array[i] - array[j] === 2) {
                result.push([i, j])
            }
        }
    }
    return result;
};
console.log("twoDiff");
console.log("-------------");
console.log(twoDiff([2, 3, 4, 6, 1, 7])); // [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5])); // [[0, 1], [1, 2], [3, 4]]
console.log(twoDiff([])); // []
console.log(" ");



/*
    arrayDiff - 
        Write a function that takes in two arrays. The function should return 
        a new array, containing the elements of arr1 that are not also in arr2.

        Assume both arrays have unique elements.
       
        Time Complexity: O(n^2) N * M

        Space Complexity: O(n)
*/

const arrayDiff = (arr1, arr2) => {
    return arr1.filter((number) => !arr2.includes(number));
};
console.log("arrayDiff");
console.log("-------------");
const array1 = [1, 23, 2, 43, 3, 4];
const array2 = [3, 23];
console.log(arrayDiff(array1, array2)); // [1, 2, 43, 4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
console.log(arrayDiff(array3, array4)) // ['a', 'ab', 'c', 'c']



/*
    valueCounter - 
        Write a function that takes in an object and a value, the function
        should return the number of times val repeats as a value in obj.

        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const valueCounter = (obj, val) => {
    let count = 0;

    for(const value in obj) {
        if(obj[value] === val) {
            count++;
        }
    }
    return count;
};
console.log("valueCounter");
console.log("-------------");
const obj1 = { 1: 'Anne', 2: 'Alvin', 3 : 'Anne', 4: 'Anne'};
console.log(valueCounter(obj1, 'Anne')); // 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100};
console.log(valueCounter(obj2, 88)); // 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'};
console.log(valueCounter(pairs, 'Roman')); // 2
console.log(" ");


/*
    elementCount - 
        Write a function that returns an object. Each key corresponds to an
        element in the array and the value corresponds to how many times that
        element appears in the array.
        
        Time Complexity: O(n)

        Space Complexity: O(n)
*/

const elementCount = (array) => {
    let result = {};

    array.forEach((element) => {
        if(!(element in result)) {
            result[element] = 1;
        } else {
            result[element] += 1;
        };
    });
    return result;
};
console.log("elementCount");
console.log("-------------");
console.log(elementCount(["a", "a", "b", "b"])) // { "a" : 2, "b" : 2 }
console.log(elementCount(["c", "a", "c", "a", "b"])) // { "c" : 2, "a" : 2, "b": 1 }
console.log(" ");



/*
    nextTwoPrimes - 
        Write a function that takes in a number and returns the next two prime
        numbers greater than num.
 
        Time Complexity: O(n)

        Space Complexity: O(n)
*/

const nextTwoPrimes = (num) => {
    let result = [];
    
    for(let i = num + 1; result.length < 2; i++) {
        if(isPrime(i)) {
            result.push(i);
        }
    }

    return result;
};
console.log("nextTwoPrimes");
console.log("-------------");
console.log(nextTwoPrimes(2)) // [3, 5]
console.log(nextTwoPrimes(3)) // [5, 7]
console.log(nextTwoPrimes(7)) // [11, 13]
console.log(nextTwoPrimes(8)) // [11, 13]
console.log(nextTwoPrimes(20)) // [23, 29]
console.log(nextTwoPrimes(97)) // [101, 103]
console.log(" ");



/*
    pairProduct - 
        Write a function that accepts an array of numbers, arr, and a target
        number. It should return pairs of indices whose elements multiply to 
        num. No pair should appear twice in the result.
 
        Time Complexity: O(n^2)

        Space Complexity: O(n^2)
*/

//const pairProduct = (arr, num) => {
//    let result = [];
//
//    for(let i = 0; i < arr.length; i++) {
//        for(let j = i + 1; j < arr.length; j++) {
//            if(arr[i] * arr[j] === num) {
//                result.push([i, j]);
//            };
//        };
//    };
//    return result;
//};

const pairProduct = (arr, num) => {
    let result = [];

    arr.forEach((element, i) => {
        arr.slice(i + 1).forEach((newElement, j) => {
            if(element * newElement === num) {
                result.push([i, j + i + 1]);
            }
        })
    });
    return result;
};
console.log("pairProduct");
console.log("-------------");
console.log(pairProduct([1, 2, 3, 4, 5,], 4)); // [ [0, 3] ]
console.log(pairProduct([1, 2, 3, 4, 5,], 8)); // [ [1, 3] ]
console.log(pairProduct([1, 2, 3, 12, 8,], 24)); // [ [1, 3], [2 , 4] ]
console.log(" ");



/*
    twoDimensionalSize - 
        Write a function that takes in a 2D-array as an argument. The function
        should return the total number of elements in the 2D-Array.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const twoDimensionalSize = (array) => {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i].length;
    }
    
    return result;
};
console.log("twoDimensionalSize");
console.log("-------------");
const arrrr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
console.log(twoDimensionalSize(arrrr1)); // 9
const arrrr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];
console.log(twoDimensionalSize(arrrr2)); // 5
console.log(" ");



/*
    longWordCount - 
        Write a function that takes in a string and returns the number of words
        longer than 7 characters.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const longWordCount = (string) => {
    let result = 0;
    
    let words = string.split(" ");

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > 7) {
            result++;
        }
    }
    return result;
};
console.log("longWordCount");
console.log("-------------");
console.log(longWordCount(""))
console.log(longWordCount("short words only")); // 0
console.log(longWordCount("one reallylong words")); // 1
console.log(longWordCount("two reallylong words inthisstring")); // 2
console.log(longWordCount("allwordword longwordword wordswordword")); // 3
console.log(longWordCount("seventy schfifty five")); // 1
console.log(" ");



/*
    factorial - 
        Write a function that returns the factorial of the number n. For 
        example the factorial of 4 is 4 * 3 * 2 * 1 = 24
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const factorial = (n) => {
    let result = n;

    for(let i = n - 1; i > 0; i--) {
        result *= i;
    }
    return result;
};

//const factorial = (n) => {
//    if(n === 1) return 1
//    let result = n;
//    while(n > 1) {
//        n--;
//        result *= n
//    };
//    return result;
//};


console.log("factorial");
console.log("-------------");
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3638800
console.log(" ");



/*
    1cm - 
        Write a function that reutrns the lowest number which is a multiple of
        both num1 and num2.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const oneCm = (num1, num2) => {
    let result;

    for(let i = 1; ; i++) {
        if(i % num1 === 0 && i % num2 === 0) {
            result = i;
            return result;
        };
    }
};
console.log("1cm");
console.log("-------------");
console.log(oneCm(2, 3)) // 6
console.log(oneCm(6, 10)) // 30
console.log(oneCm(24, 26)) // 312
console.log(" ");



/*
    hipsterfyWord - 
        Write a function that takes in a string and retunrs the string with
        the last vowel removed. 'y' is not a vowel.
 
        Time Complexity: O(n)

        Space Complexity: O(n)
*/

const hipsterfyWord = (word) => {
    const vowels = ['a', 'e', 'i', 'o,', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let i = word.length - 1; i > 0; i--) {
        if(vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
};

console.log("hipsterfyWord");
console.log("-------------");
console.log(hipsterfyWord('proper')) // 'propr'
console.log(hipsterfyWord('tonic')) // 'tonc'
console.log(hipsterfyWord('PANTHER')) // 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) // 'BACKWRDS'
console.log(" ");



/*
    objectToString - 
        Write a function that takes in a char count object and returns a string
        representing the counts of each character
 
        Time Complexity: O(n) k * m
        Where k is the number of keys and m is the maximum value

        Space Complexity: O(n)
*/

const objectToString = (object) => {
    let string = "";

    for(const currentLetter in object) {
        while(object[currentLetter] > 0) {
            string += currentLetter;
            object[currentLetter] -= 1;
        }
    }
    return string
};
console.log("objectToString");
console.log("-------------");
console.log(objectToString({ a: 2, b: 4, c: 1})); // 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1})); // 'boot'



/*
    shortestWord - 
        Write a functiont hat returns the shortest word of a sentence. You can 
        assume that the words of the sentence all have different lengths.
 
        Time Complexity: O(n + k)
            Where n is the number of characters in the input sentece

        Space Complexity: O(n)
            Storing words in the array
*/

const shortestWord = (sentence) => {
    let words = sentence.split(" ");
    let shortestWord = words[0];

    for(let i = 0; i < words.length; i++) {
        if(words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
};

console.log("shortestWord");
console.log("-------------");
console.log(shortestWord('app academy is cool')); // is
console.log(shortestWord('programming bootcamp')); // bootcamp
console.log(" ");



/*
    greatestCommonFactor - 
        Write a function that retrusn the largest number that is divides both
        num1 & num2
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const greatestCommonFactor = (num1, num2) => {
    let greatest = 0;
    
    for(let i = 1; i < num1; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            if(i > greatest) {
                greatest = i;
            }
        }
    }
        
    return greatest;
};
console.log("greatestCommonFactor");
console.log("-------------");
console.log(greatestCommonFactor(15, 25)); // 5
console.log(greatestCommonFactor(16, 24)); // 8
console.log(greatestCommonFactor(7, 11)); // 1



/*
    isPassing - 
        Write a funcion that takes in an array of assessment objects. The function
        should return true if the average assessment score is at least 70.
        Should return false otherwise.
 
        Time Complexity: O()

        Space Complexity: O()
*/

const isPassing = (assessment) => {
    let average = 0;

    for(const item of assessment) {
        average += item.score;
    }
    return average / assessment.length >= 70;
};
console.log("isPassing");
console.log("-------------");
const assessment1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
];
console.log(isPassing(assessment1));
const assessment2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
];
console.log(isPassing(assessment2));
console.log(" ");



/*
    valueConcat - 
        Write a fucntion that takes in an array and object the function should 
        return a new array where each element is concatenated with it's
        corresponding value from the object.
 
        Time Complexity: O(n)

        Space Complexity: O(n)
*/

const valueConcat = (array, obj) => {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        if(obj.hasOwnProperty(array[i])) {
            result.push(array[i] + obj[array[i]]);
        } else {
            result.push(array[i]);
        }
    }
    return result;
};

console.log("valueConcat");
console.log("-------------");
const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris'}
console.log(valueConcat(arr, obj)); // [ 'alexbronca', 'maurice', 'megan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3})) // [ 'a', 'b2', 'c3']
console.log(" ");



/*
    threeInARow - 
        Write a function that takes in an array of numbers and returns true if
        the array contains 3 of the same number consecutively. The function
        should return false otherwise.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
*/

const threeInARow = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            return true
        }
    }
    return false;
};
console.log("threeInARow");
console.log("-------------");
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // true
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // false
console.log(" ");



/*
    variableNameify - 
        Write a function that takes in an array of words. The function should
        return a string representing the variable name obtained by combining
        the words and captitalizing them in mixCased style.
 
        Time Complexity: O(n) n * m
        n is the number of words in the array
        m is the average length of each word

        Space Complexity: O(n * m)
        n is the numnber of words
        m is the average length of each word
        
*/

//const variableNameify = (words) => {
//    return words.map((word, index) => {
//        word = word.toLowerCase();
//        if(index === 0) {
//            return word
//        } else {
//            return word.charAt(0).toUpperCase() + word.slice(1);
//        }
//    }).join("");
//};


const variableNameify = (words) => {
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if(i !== 0) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    return words.join('')
};
console.log("variableNameify");
console.log("-------------");
console.log(variableNameify(['is', 'prime'])); // isPrime
console.log(variableNameify(['remove', 'last', 'vowel'])); // removeLastVowel
console.log(variableNameify(['MaX', 'VALUE'])); // maxValue
console.log(" ");



/*
    threeIncreasing - 
        Write a function that takes in an array of numbers and returns true
        of the array contains 3 consecutive numbers in increasing order. The
        function should return false otherwise. Note that the 3 consecutive 
        numbers should be increasing by 1, so the second number is greater than
        the first, and the third number is 1 greater than the second.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
        
*/

const threeIncreasing = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 === arr[i+1] && arr[i] + 2 === arr[i+2]) {
            return true
        }
    }
    return false;
};
console.log("threeIncreasing");
console.log("-------------");
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(" ");



/*
    reverse2D - 
        Write a function that takes in 2D array of string. The function should
        return a string representing the elements of the array in reverse order.
 
        Time Complexity: O()

        Space Complexity: O()
        
*/

const reverse = (arrayOfArrays) => {
    let result = [];
    //for(let i = 0; i < array.length; i++) {
    //    result = result.concat(array[i]);
    //}
    for(array of arrayOfArrays) {
        result = result.concat(array);
    }
    result = result.reverse().join("");
    return result
};
console.log("reverse2D");
console.log("-------------");
const aaa1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
];
console.log(reverse(aaa1)); // ihgfedcba
const aaa2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
];
console.log(reverse(aaa2)); // PatrickOscarMikeMattJulian
console.log(" ");



/*
    reverb - 
        Write a function that takes in a word string and returns the word with
        all characters after the last vowel repeated.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
        
*/

const reverb = (word) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = word.length - 1; i >= 0; i--) {
        if(vowels.includes(word[i])) {
            return word + word.slice(i);
        }
    }
    return word;
};
console.log("reverb");
console.log("-------------");
console.log(reverb('running')); // runninging
console.log(reverb('wild')); // wildild
console.log(reverb('debugged')); // debuggeded
console.log(reverb('my')); // my
console.log(" ");



/*
    countRepeats - 
        Write a function that takes in a string and returns the number of letters
        that appear more than once in the string. You may assume the string
        contains only lowercase letters. Count the number of letters that repeat,
        not the number of times they repeat in the string.
 
        Time Complexity: O(n)

        Space Complexity: O(n)
        
*/

//const countRepeats = (string) => {
//    let unique = new Set();
//    let repeat = new Set();
//
//    for(let i = 0; i < string.length; i++) {
//        if(unique.has(string[i])) {
//            repeat.add(string[i])
//        } else {
//            unique.add(string[i])
//        }
//    }
//    return repeat.size
//};

// Time Complexity: O(n^2)
//
// Space Complexity: O(n)
//
const countRepeats = (string) => {
    let unique = [];
    let repeat = [];
    for(let i = 0; i < string.length; i++) {

        if(unique.includes(string[i]) && !repeat.includes(string[i])) {
              repeat.push(string[i]);
        } else {
              unique.push(string[i]);
        }
    }
    return repeat.length;
};
console.log("countRepeats");
console.log("-------------");
console.log(countRepeats('calvin')); // 0
console.log(countRepeats('caaaalvin')); // 1
console.log(countRepeats('pops')); // 1
console.log(countRepeats('mississippi')); // 3
console.log(countRepeats('hellobootcampprep')); // 4
console.log(" ");



/*
    pairsToString - 
        Write a function that takes in an array of paris the function should
        return a string corresponding to the pairs.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
        
*/

const pairsToString = (array) => {
    let result = "";

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i][1]; j++) {
            result = result + array[i][0]
        }
    }
    return result;

};
console.log("pairsToString");
console.log("-------------");
const aaaar1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];
console.log(pairsToString(aaaar1)); // aaabbcc
const aaaa2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
];
console.log(pairsToString(aaaa2)); // food!



/*
    countAdjacentSums - 
        Write a function that takes an array and number. It should count the
        number of times that two adjacent numbers in an array add up to n.
 
        Time Complexity: O(n)

        Space Complexity: O(1)
        
*/

const countAdjacentSums = (array, n) => {
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] + array[i+1] === n) {
            count++;
        }
    }
    return count;
};
console.log("countAdjacentSums");
console.log("-------------");
console.log(countAdjacentSums([1, 5, 1], 6)); // 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // 3



/*
    signFlipCount - 
        Write a function that takes in an array of numbers as arguments
        the function should return the number of times adjacent numbers in the
        array switch signs from positive to negative or vice versa. The number
        0 is neither postive nor negative.

        Time Complexity: O(n)

        Space Complexity: O(1)
        
*/

const signFlipCount = (nums) => {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0 && nums[i+1] < 0) {
            count++;
        } else if(nums[i] < 0 && nums[i+1] > 0) {
            count++;
        }
    }
    return count;
};
console.log("signFlipCount");
console.log("-------------");
console.log(signFlipCount([5, 6, 10, 3])); // 0
console.log(signFlipCount([-12, 0, -3, -5])); // 0
console.log(signFlipCount([-12, 10, -3, -5])); // 2
console.log(signFlipCount([1, -2, -3, -4])) // 1
console.log(signFlipCount([-1, 11.3, -3, 100])) // 3
console.log(" ");



/*
    powerSequence - 
        Write a function that takes in two numbres, base and length. The function
        should return an array contanining a power sequence with the given length
        Assume that the length is atleast 1.
        
        The first number of a power sequence begins with base. The second number
        of the sequence is the product between the first number and the base.
        The third number of the seqence is the product between the second number
        and the base.

        Time Complexity: O(n)

        Space Complexity: O(n)
        
*/

const powerSequence = (base, length) => {
    let result = [base];

    for(let i = 1; i < length; i++) {
        result.push(result[i-1] * base)
    }
    return result;
};
console.log("powersequence");
console.log("-------------");
console.log(powerSequence(3, 4)); // [3, 9, 27, 81]
console.log(powerSequence(2, 6)); // [2, 4, 8, 16, 32, 64]
console.log(powerSequence(8, 3)); // [8, 64, 512]
console.log(" ");



/*
    collapseString - 
        Write a function that takes in a string as an argument. The function
        should return the string where 'streaks' of consecutive characters are
        collapsed to a single character.

        Time Complexity: O(n)

        Space Complexity: O(n)
        
*/

const collapseString = (string) => {
    let newString = "";
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[i+1]) {
            newString += string[i]
        }
    }
    return newString;
};
console.log("collapseString");
console.log("-------------");
console.log(collapseString("apple")); // aple
console.log(collapseString("AAAaalviiiiin!")); // Aalvin!
console.log(collapseString("hello   app academy")); // helo ap academy
console.log(" ");


/*
    oddWordsOut - 
        Write a function that takes in a sentence string and returns the sentnce
        where words with an odd number of characters are removed

        Time Complexity: O(n)

        Space Complexity: O(n) m
        where m is the number of words derived from n
        
*/

const oddWordsOut = (sentence) => {
    let words = sentence.split(" ");
    let result = [];

    words.forEach((word) => {
        if(word.length % 2 == 0) {
            result.push(word);
        }
    })
    return result.join(" ");
};
console.log("oddWordsOut");
console.log("-------------");
console.log(oddWordsOut('go to the store and buy milk')); // go to milk
console.log(oddWordsOut('what is the answer')); // what is answer
console.log(" ");



/*
    mindPsAndQs - 
        Write a function that accepts a string of uppercase letter. The function
        should return the length of the longest consecutive streak of letters
        'P' and 'Q'.

        Use two variables. One to track the length of the current streak and
        another to track the length of the longest streak so far. Think of using
        a strategy similar to maxValue. This can be solved using a single loop.

        Time Complexity: O(n)

        Space Complexity: O(1) 
        
*/

const mindPsAndQs = (string) => {
    let current = 0;
    let max = 0;

    for(let char of string) {
        if(char === 'P' || char === 'Q') {
            current++;
        } else {
            max = Math.max(max, current);
            current = 0;
        }
    }
    max = Math.max(max, current);
    return max;
};
console.log("mindPsAndQs");
console.log("-------------");
console.log(mindPsAndQs("BOOTCAMP")) // 1
console.log(mindPsAndQs("APCDQQPPC")) // 4
console.log(mindPsAndQs("PQPQ")) // 4
console.log(mindPsAndQs("PPPXQPPPQ")) // 5



/*
    commonFactors - 
        Write a function that returns an array that contains the common factors
        between both numbres. A factor is a number that divides another number
        with no remainder.

        Time Complexity: O()

        Space Complexity: O() 
        
*/

const commonFactor = (num1, num2) => {
    let result = [];

    for(let i = 1; i <= num1; i++) {
        if((num1 % i === 0) && (num2 % i === 0)) {
            result.push(i);
        }
    }
    return result;
};
console.log("commonFactor");
console.log("-------------");
console.log(commonFactor(12, 50)); // [1, 2]
console.log(commonFactor(6, 24)); // [1, 2, 3, 6]
console.log(commonFactor(11, 22)); // [1, 11]
console.log(commonFactor(45, 60)); // [1, 3, 5, 15]
console.log(" ");


/*
    commonPrimeFactors - 
        Write a function that takes in two numbers as arguments and returns an
        array of all prime factors that are common between the two numbers.
        A factor is a number that divides another number without resulting in
        a remainder. 

        Time Complexity: O(n * sqrt(n))

        Space Complexity: O(n) 
        
*/

const commonPrimeFactors = (num1, num2) => {
    let result = commonFactor(num1,num2)
    let primeResult = result.filter((number) => isPrime(number));
    return primeResult;
};
console.log("commonPrimeFactor");
console.log("-------------");
console.log(commonPrimeFactors(12, 50)); // [2]
console.log(commonPrimeFactors(6, 24)); // [2, 3]
console.log(commonPrimeFactors(11, 22)); // [11]
console.log(commonPrimeFactors(45, 60)); // [3, 5]
console.log(" ");



/*
    splitHalfArray - 
        Write a function that takes in an array as an argument and returns two
        havles of that array split in the middle. If the array has an odd number
        elements, then themiddle element should be exculded.

        Time Complexity: O(n) - Slicing an array takes linear time proportional 
        to the n, the number of elements being copied. We have two halves of the
        array. The time complexity if each slice is O(n/2) -> O(n)

        Space Complexity: O(n) - Each slice creates a new array, and we are
        creating two arrays with a total of n elements. The space used by the
        result array is O(n).
        
*/

const splitHalfArray = (array) => {
    let half = Math.floor((array.length - 1) / 2);
    let result = [];
    if(array.length % 2 === 0) {
        result.push(array.slice(0, half + 1));
        result.push(array.slice(half + 1));
    } else {
        result.push(array.slice(0, half));
        result.push(array.slice(half + 1));
    }
    return result;
};

console.log("splitHalfArray");
console.log("-------------"); 
console.log(splitHalfArray([1, 2, 3, 4, 5])); // [ [1, 2], [4, 5]]
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f'])); // [ ['a', 'b', 'c'], ['d', 'e', 'f'] ]
console.log(" ");



/*
    threeUniqueVowels - 
        Write a function that takes in a string and returns true if the string 
        contains at least three different vowels.

        Time Complexity: O(n)

        Space Complexity: O(1) - Constant time because vowels array is static
        and hold will at most ever hold 5 (constant amount).
*/

//const threeUniqueVowels = (string) => {
//    const vowels = ['a', 'e', 'i', 'o', 'u'];
//    let hold = [];
//    let count = 0;
//
//    for(let i = 0; i < string.length; i++) {
//        if((vowels.includes(string[i])) && (!hold.includes(string[i]))) {
//            hold.push(string[i]);
//            count++;
//        }
//    }
//    return count >= 3;
//};

const threeUniqueVowels = (string) => {
    const vowels = new Set(['a', 'e', 'i', 'o','u']);
    const uniqueVowels = new Set();

    for(char of string) {
        if(vowels.has(char)) {
            uniqueVowels.add(char);
            if(uniqueVowels.size >= 3) {
                return true;
            }
        }
    }
    return false;
};
console.log("threeUniqueVowels");
console.log("-------------"); 
console.log(threeUniqueVowels('delicious')); // True
console.log(threeUniqueVowels('the bootcamp')); // True
console.log(threeUniqueVowels('bootcamp')); // false
console.log(threeUniqueVowels('dog')); // false
console.log(threeUniqueVowels('go home')); // false
console.log(" ");



/*
    vowelShift - 
        Write a function that takes in a sentence string. The function should
        return a new sentence, where every vowel is replaced with the next vowel
        in the alphbet.

        Time Complexity: O(n^2) - String concatenation is typically O(n) in JS
        due to the way strings are handled combine this with the iterative loop.

        Space Complexity: O(n) 
*/

//const vowelShift = (sentence) => {
//    const vowels = ['a', 'e', 'i', 'o', 'u'];
//    let string = "";
//
//    for(let i = 0; i < sentence.length; i++) {
//        if(vowels.includes(sentence[i])) {
//            let index = vowels.indexOf(sentence[i]);
//            if(index === vowels.length - 1) {
//                string += vowels[0];
//            } else {
//                string += vowels[index+1];
//            }
//        } else {
//            string += sentence[i];
//        }
//    }
//    return string;
//};

const vowelShift = (sentence) => {
    const vowelMap = {
        'a': 'e',
        'e': 'i',
        'i': 'o',
        'o': 'u',
        'u': 'a'
    };

    let result = "";

    for(char of sentence) {
        result += vowelMap[char] || char;
    }
    return result;
};
console.log("vowelShift");
console.log("-------------"); 
console.log(vowelShift('bootcamp')); // buutcemp
console.log(vowelShift('hello world')); // hillu wurld
console.log(vowelShift('on the hunt')); // un thi hant
console.log(" ");



/*
    hasSymmetry - 
        Write a function that takes in an array. The function should return true
        of the array has symmetry and false otherwise. For an array to have 
        symmetry it needs to be the same forwards and backwards. 

        Time Complexity: O(n)

        Space Complexity: O(n) 
*/

const hasSymmetry = (array) => {
    let result = []; 

    for(let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result.toString() === array.toString()
};
console.log("hasSymmetry");
console.log("-------------"); 
console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // false
console.log(hasSymmetry(['cat', 'dog',' bird', 'dog', 'cat'])); // true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // false
console.log(" ");



/*
    evenSumArray - 
        Write a function that takes in an array of numbres and returns a new 
        array where each num is replaced with the sum of all even numbers less
        than or equal to that num.

        Time Complexity: O(n)

        Space Complexity: O(n) 
*/

//const evenSumArray = (array) => {
//    let result = [];
//
//    for(let i = 0; i < array.length; i++) {
//        let sum = 0;
//        if(array[i] % 2 !== 0) {
//            array[i] = array[i] - 1;
//        }
//        for(let j = 2; j <= array[i]; j+= 2){
//            sum += j
//        }
//        result.push(sum);
//    }
//    return result;
//};


//const evenSumArray = (array) => {
//    for(let i = 0; i < array.length; i++) {
//        let num = array[i];
//        let count = 0;
//        let sum = 0;
//
//        if(num % 2 !== 0) {
//           num -= 1;
//        }
//
//        while(count !== num / 2) {
//            sum += 2;
//            count++;
//        }
//        array[i] = sum;
//    }
//    return array;
//};


const evenSumArray = (array) => {
    return array.map(num => {
        if(num % 2 !== 0) num -= 1;
        let n = num / 2;
        
        return n * (n + 1);
    })
};
console.log("evensumarray");
console.log("-------------"); 
console.log(evenSumArray([6, 7, 5])); // [12, 12, 6]
console.log(evenSumArray([2, 8, 3, 5])); // [2, 20, 2, 6]
console.log(" ");



/*
    numsToWords - 
        Write a function that takes in a string representing a number. The
        function should return a new string where each digit character is replaced
        with it's word representation. Assume teh input string only contains 
        numeric characters. 

        Time Complexity: O(n)

        Space Complexity: O(n) 
*/

const numsToWords = (numString) => {
    let result = ""

    const wordMap = {
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine'
    }

    for(num of numString) {
        result += wordMap[num];
    }

    return result;
};
console.log("numToWords");
console.log("-------------"); 
console.log(numsToWords('42')); // FourTwo
console.log(numsToWords('123')); // OneTwoThree
console.log(numsToWords('159598')); // OneFiveNineFiveNineEight
console.log(" ");



/*
    moreDotsLessDash - 
        Write a function that takes in a string and returns true if the string 
        contains more dots than dashes false otherwise.

        Time Complexity: O()

        Space Complexity: O() 
*/

const moreDotsLessDash = (string) => {
    let dotCount = 0;
    let dots = ['.'];
    let dashCount = 0;
    let dash = ['-'];

    for(char of string) {
        if(dots.includes(char)) {
            dotCount++;
        } else if(dash.includes(char)) {
            dashCount++;
        }
    }

    return dotCount > dashCount;
};
console.log("moreDotsLessDash");
console.log("-------------"); 
console.log(moreDotsLessDash('2-D arrays are fun. I think.')) // True
console.log(moreDotsLessDash('.-.-.')) // True
console.log(moreDotsLessDash('.-')) // false
console.log(moreDotsLessDash('.--')) // false
