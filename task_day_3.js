// Print all natural numbers from 1 to n using a while loop
function printNaturalNumbers(n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }
}
printNaturalNumbers(10);

// Print all natural numbers in reverse from n to 1 using a while loop
function printNaturalNumbersReverse(n) {
    let i = n;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
printNaturalNumbersReverse(10);

// Print all alphabets from a to z using a while loop
function printAlphabets() {
    let ch = 'a';
    while (ch <= 'z') {
        console.log(ch);
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
}
printAlphabets();

// Print all even numbers between 1 to 100 using a while loop
function printEvenNumbers() {
    let num = 2;
    while (num <= 100) {
        console.log(num);
        num += 2;
    }
}
printEvenNumbers();

// Print all odd numbers between 1 to 100 using a while loop
function printOddNumbers() {
    let num = 1;
    while (num <= 100) {
        console.log(num);
        num += 2;
    }
}
printOddNumbers();

// Find the sum of all natural numbers between 1 to n using a while loop
function sumOfNaturalNumbers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumOfNaturalNumbers(10));

// Find the sum of all even numbers between 1 to n using a while loop
function sumOfEvenNumbers(n) {
    let sum = 0;
    let i = 2;
    while (i <= n) {
        sum += i;
        i += 2;
    }
    return sum;
}
console.log(sumOfEvenNumbers(10));

// Find the sum of all odd numbers between 1 to n using a while loop
function sumOfOddNumbers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i += 2;
    }
    return sum;
}
console.log(sumOfOddNumbers(10));

// Print the multiplication table of any number using a while loop
function multiplicationTable(num) {
    let i = 1;
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}
multiplicationTable(5);

// Count the number of digits in a number using a while loop
function countDigits(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(12345));

// Find the first and last digit of a number using a while loop
function findFirstAndLastDigit(num) {
    let firstDigit, lastDigit;
    lastDigit = num % 10;
    while (num > 0) {
        firstDigit = num % 10;
        num = Math.floor(num / 10);
    }
    return [firstDigit, lastDigit];
}
console.log(findFirstAndLastDigit(12345));

// Find the sum of the first and last digit of a number using a while loop
function sumOfFirstAndLastDigit(num) {
    let firstDigit, lastDigit;
    lastDigit = num % 10;
    while (num > 0) {
        firstDigit = num % 10;
        num = Math.floor(num / 10);
    }
    return firstDigit + lastDigit;
}
console.log(sumOfFirstAndLastDigit(12345));

// Swap the first and last digits of a number using a while loop
function swapFirstAndLastDigit(num) {
    let firstDigit, lastDigit;
    lastDigit = num % 10;
    while (num > 0) {
        firstDigit = num % 10;
        num = Math.floor(num / 10);
    }
    let newNum = lastDigit * Math.pow(10, countDigits(num)) + num * 10 + firstDigit;
    return newNum;
}
console.log(swapFirstAndLastDigit(12345));

// Calculate the sum of digits of a number using a while loop
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumOfDigits(12345));

// Calculate the product of digits of a number using a while loop
function productOfDigits(num) {
    let product = 1;
    while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }
    return product;
}
console.log(productOfDigits(12345));

// Print the reverse of a number using a while loop
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(12345));

// Check whether a number is palindrome or not using a while loop
function isPalindrome(num) {
    return num === reverseNumber(num);
}
console.log(isPalindrome(12321));

// Find the frequency of each digit in a given integer using a while loop
function digitFrequency(num) {
    let frequencies = new Array(10).fill(0);
    while (num > 0) {
        const digit = num % 10;
        frequencies[digit]++;
        num = Math.floor(num / 10);
    }
    return frequencies;
}
console.log(digitFrequency(1223334444));

// Print a number in words using a while loop
function numberToWords(num) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    let words = "";
    if (num >= 100) {
        words += units[Math.floor(num / 100)] + " Hundred ";
        num %= 100;
    }
    if (num >= 11 && num <= 19) {
        words += teens[num - 10] + " ";
    } else if (num >= 20) {
        words += tens[Math.floor(num / 10)] + " ";
        num %= 10;
    }
    if (num >= 1 && num <= 9) {
        words += units[num] + " ";
    }
    return words.trim();
}
console.log(numberToWords(123));

// Print all ASCII characters with their values using a while loop
function printASCIICharacters() {
    let value = 0;
    while (value <= 127) {
        console.log(`ASCII Value: ${value}, Character: ${String.fromCharCode(value)}`);
        value++;
    }
}
printASCIICharacters();

// Find the power of a number using a for loop
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3));

// Find all factors of a number using a while loop
function findFactors(num) {
    let factors = [];
    let i = 1;
    while (i <= num) {
        if (num % i === 0) {
            factors.push(i);
        }
        i++;
    }
    return factors;
}
console.log(findFactors(12));

// Calculate the factorial of a number using a for loop
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// Find the HCF (GCD) of two numbers using the Euclidean algorithm and a while loop
function findHCF(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(findHCF(48, 18));

// Find the LCM of two numbers using the formula LCM(a, b) = (a * b) / HCF(a, b)
function findLCM(a, b) {
    return (a * b) / findHCF(a, b);
}
console.log(findLCM(12, 18));

// Check whether a number is a prime number or not using a while loop
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(isPrime(17));

// Print all prime numbers between 1 to n using a while loop
function printPrimeNumbers(n) {
    for (let num = 2; num <= n; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
printPrimeNumbers(50);

// Find the sum of all prime numbers between 1 to n using a while loop
function sumOfPrimeNumbers(n) {
    let sum = 0;
    for (let num = 2; num <= n; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPrimeNumbers(50));

// Find all prime factors of a number using a while loop
function primeFactors(num) {
    let factors = [];
    let div = 2;
    while (num > 1) {
        while (num % div === 0) {
            factors.push(div);
            num /= div;
        }
        div++;
    }
    return factors;
}
console.log(primeFactors(56));

// Check whether a number is an Armstrong number or not using a while loop
function isArmstrong(num) {
    const originalNum = num;
    let sum = 0;
    const n = countDigits(num);
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, n);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
}
console.log(isArmstrong(153));

// Print all Armstrong numbers between 1 to n using a while loop
function printArmstrongNumbers(n) {
    for (let num = 1; num <= n; num++) {
        if (isArmstrong(num)) {
            console.log(num);
        }
    }
}
printArmstrongNumbers(1000);

// Check whether a number is a Perfect number or not using a while loop
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(28));

// Print all Perfect numbers between 1 to n using a while loop
function printPerfectNumbers(n) {
    for (let num = 1; num <= n; num++) {
        if (isPerfect(num)) {
            console.log(num);
        }
    }
}
printPerfectNumbers(1000);

