// Programs/1. Arithmetic Calculator.mp4		2018-06-18 07:29:28	248099189
// Programs/2. Find Whether A Number Is Positive or Negative.mp4		2018-06-18 07:29:31	95119219
// Programs/3. Find Whether A Number Is Even or Odd.mp4		2018-06-18 07:29:36	82979588
// Programs/4. Generate Table For Any Number.mp4		2018-06-18 07:29:40	149123828
// Programs/5. Find The Largest Out of 3 Numbers.mp4		2018-06-18 07:29:44	121130111
// Programs/6. Find The Sum of All Digits.mp4		2018-06-18 07:29:52	279406369
// Programs/7. Swap 2 Numbers By Using A 3rd Variable.mp4		2018-06-18 07:29:56	127963133
// Programs/9. Find The Factorial of A Number.mp4		2018-06-18 07:30:10	201842615
// Programs/10. Convert From Decimal To Binary, Octal and Hex.mp4		2018-06-18 07:30:18	115202537
// Programs/11. Convert From Char to ASCII.mp4		2018-06-18 07:30:22	74053741
// Programs/12. Check Whether A Number is Armstrong Number or Not.mp4		2018-06-18 07:30:27	180066043
// Programs/13. Generate Random Numbers.mp4		2018-06-18 07:30:31	118686908
// Programs/14. Check Whether A Number is Prime or Not.mp4		2018-06-18 07:30:37	188556224
// Programs/15. Reversal of A Number.mp4		2018-06-18 07:30:47	241990051
// Programs/16. String Reversal.mp4		2018-06-18 07:30:55	210579303
// Programs/17. Generate Fibonacci Series Without Recursion.mp4		2018-06-18 07:31:00	185191697
// Programs/18. Generate Fibonacci Series With Recursion.mp4		2018-06-18 07:31:09	127906286
// Programs/19. Check If A Given Number is a Palindrome.mp4		2018-06-18 07:31:14	145802754
// Programs/20. Check If A Given String is a Palindrome.mp4		2018-06-18 07:31:20	113382909
// Programs/21. Find Duplicate Elements In An Array.mp4		2018-06-18 07:31:28	193790375
// Programs/22. Check Whether 2 Arrays Are Equal.mp4		2018-06-18 07:31:32	126632009
// Programs/23. Perform Sum of Matrices.mp4		2018-06-18 07:31:35	113993509
// Programs/24. Perform Multiplication of Matrices.mp4		2018-06-18 07:31:39	143524694
function arithmeticCalculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operator';
    }
}

// Example usage:
console.log(arithmeticCalculator(10, 5, '+')); // 15
console.log(arithmeticCalculator(10, 5, '-')); // 5
console.log(arithmeticCalculator(10, 5, '*')); // 50
console.log(arithmeticCalculator(10, 5, '/')); // 2
console.log(arithmeticCalculator(10, 0, '/')); // Error: Division by zero
console.log(arithmeticCalculator(10, 5, '%')); // Error: Invalid operator


const isPositiveOrNegative = (num) => {
    if (num > 0) {
        return 'Positive';
    } else if (num < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

// Example usage:   
console.log(isPositiveOrNegative(10)); // Positive  
console.log(isPositiveOrNegative(-10)); // Negative
console.log(isPositiveOrNegative(0)); // Zero

const isEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}       

// Example usage:   
console.log(isEvenOrOdd(10)); // Even
console.log(isEvenOrOdd(11)); // Odd    

const generateTable = (num) => {        
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// Example usage:
generateTable(5);

const findLargest = (a, b, c) => {          
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage:
console.log(findLargest(10, 20, 30)); // 30
console.log(findLargest(30, 20, 10)); // 30
console.log(findLargest(10, 30, 20)); // 30

const sumOfDigits = (num) => {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage:               
console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15


const swapNumbers = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// Example usage:       
console.log(swapNumbers(10, 20)); // [20, 10]

const factorial = (num) => {    
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example usage:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

const decimalToBinary = (num) => {
    return num.toString(2);
}

const decimalToOctal = (num) => {
    return num.toString(8);
}

const decimalToHex = (num) => {
    return num.toString(16);
}

// Example usage:       
console.log(decimalToBinary(10)); // 1010
console.log(decimalToOctal(10)); // 12
console.log(decimalToHex(10)); // a


const charToAscii = (char) => {
    return char.charCodeAt(0);
}   

// Example usage:
console.log(charToAscii('A')); // 65
console.log(charToAscii('a')); // 97

//  An Armstrong number for a given number of digits is a number
//  that is equal to the sum of its own digits each raised 
// to the power of the number of digits.


const isArmstrong = (num) => {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

// Example usage:
console.log(isArmstrong(153)); // true
console.log(isArmstrong(370)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123)); // false

const generateRandomNumbers = (n) => {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}

// Example usage:

console.log(generateRandomNumbers(5)); // [ 87, 24, 94, 69, 84 ]

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    //If a number n has a divisor larger than its square root, then it must also have a smaller divisor 
    // (otherwise the product of the two divisors would exceed n).
    // So, checking up to the square root is enough to determine if a number is prime.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false


const reverseNumber = (num) => {
    let reversed = 0;
    while (num > 0) {
        //Extract the last digit of num and add it to reversed:
        reversed = reversed * 10 + num % 10;
        //Remove the last digit from num:
        num = Math.floor(num / 10);
    }
    return reversed;
}

// Example usage:   
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(456)); // 654

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// Example usage:

console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow

const fibonacciSeries = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Example usage:   
console.log(fibonacciSeries(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibonacciSeries(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

const isPalindromeNumber = (num) => {
    return num === reverseNumber(num);
}

// Example usage:
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false

const isPalindromeString = (str) => {
    return str === reverseString(str);
}

// Example usage:
console.log(isPalindromeString('madam')); // true
console.log(isPalindromeString('hello')); // false

const findDuplicates = (arr) => {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

// Example usage:
console.log(findDuplicates([1, 2, 3, 4, 5, 2, 4])); // [ 2, 4 ]

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false

const sumOfMatrices = (matrix1, matrix2) => {
    let sum = [];
    for (let i = 0; i < matrix1.length; i++) {
        sum[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            sum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return sum;
}

// Example usage:
console.log(sumOfMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]])); // [ [ 6, 8 ], [ 10, 12 ] ]


const multiplyMatrices = (matrix1, matrix2) => {    
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

// Example usage:
console.log(multiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]])); // [ [ 19, 22 ], [ 43, 50 ] ]

