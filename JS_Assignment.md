# *** JavaScript Assignment ***



### **Q-1** What is JavaScript How to use it?

**Ans.**    The JavaScript is a scripting or programming language that allows you to implement complex features on web pages.
==> Open your favorite browser (here we will use Google Chrome).
==> Open the developer tools by right clicking on an empty area and select Inspect.
==> On the developer tools, go to the console tab. Then, write JavaScript code and press enter to run the code. 

### **Q-2** How many types of variable in javaScript?

**ANS.**    There are three types of variables in JavaScript :let, var and const. 

=> let: A let variable can not be used a second time.
but value can be changed.
Example:- a = 30;
         let a = 30;
         a = 40;

=> var: var variable can be used repeatedly.
Example:- b = 20;
         var b = 20;
         var b = 30;

=> const: const variable second time can not be used and not can the value be changed.
Example:- c = 10;
         const c = 10;

There are some rules while declaring a JavaScript variable. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.

### **Q-3** Define a Data Types in js?

**ANS.**    The Data types are (Number, String, Boolean, Null and Undefined)

=> Number:- Represents numeric data, including integers and floating-point numbers.
Example :- 10
           10.10
           101010

=> String :- Represents textual data, enclosed in single or double quotes.
Example :- `jayesh`

=> Boolean :- Represents a logical entity, either 'true' or 'false'.
Example :- true;
           false;

=> Null :- Represents any value equal of any object value and any value is right side to equal to left side.
Example :- b = null;

=> Undefined :- undefined value is 'null' value equal (=). undefind present value is equal.
Example :- c = undefined;

### **Q-4** Write a mul Function Which will Work Properly When invoked With Following Syntax.

**ANS.** 
function mul(a) {
            return function(b){
                return function(c){
                    return a * b * c ;
                };
            }
};

        console.log(mul(4)(2)(3));
         
        Output = 24

### **Q-5** What the deference between undefined and undeclare in JavaScript?

**ANS.**     => Undefined :- A variable is "undefined" when it has been declared but has not been assigned a value.
Example :- let x;
            console.log(x);

            Output = Undefined
=>  Undeclared :- An "undeclared" variable is one that has been used without being declared using `var`, `let`, and `const`. Using an Undeclared variable will typically result in a `ReferenceError`.
Example :-  console.log(y);

            Output =`ReferenceError` y is not defined

### **Q-6** Using console.log() print out the following statement: The quote 'There is no exercise
### better for the heart than reaching down and lifting people up.' by John Holmes teaches us to
### help one another. Using console.log() print out the following quote by Mother Teresa:

**ANS.**    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

Output = The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("Mother Teresa");

Output = Mother Teresa

### **Q-7** Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

**ANS.**    
let str = '10';
let num = Number(str);

if (typeof num === 'number' && num === 10){
    console.log('num is exactyl equal to 10');
} else {
    console.log('num is not exactly equal to 10');
    num = 10 ;
    console.log('num has been set to 10');
}

Output => num is exactly equal to 10

### **Q-8** Write a javaScript Program to find the area of a triangle ?

**ANS.** 
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);

console.log(`The area of the triangle with base ${base} and height ${height} is ${area}`);

### **Q-9** Write a JavaScript program to calculate days left until next Christmas?

**ANS**
 currentDay = new Date().getDate();
      let isLeapYear = false;
      currentMonth = 28;

      let countOfDayInCurrentMonth;
      if (
        currentMonth == '0' 
        currentMonth == '2' 
        currentMonth == '4' 
        currentMonth == '6' 
        currentMonth == '7' 
        currentMonth == '9' 
        currentMonth == '11'
      ) {
        countOfDayInCurrentMonth = 31;
      } else if (currentMonth == '1') {
        if (isLeapYear) {
          countOfDayInCurrentMonth = 29;
        } else {
          countOfDayInCurrentMonth = 28;
        }
      } else {
        countOfDayInCurrentMonth = 30;
      }

      daysLeftInCurrentMonth = countOfDayInCurrentMonth - currentDay;
      daysLeftTillDecMonth = 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;

      daysLeftTillChristmasFromToday =
        daysLeftInCurrentMonth + daysLeftTillDecMonth + 25;

      console.log(daysLeftTillChristmasFromToday);

      function mul(firstNumber, secondNumber) {
        console.log(firstNumber * secondNumber);
      }

      mul(10, 20);

      Output= 282 Christmas From Today, 200 Fist Number and second Number



### **Q-10**    What is Condition Statement? 

**ANS**
a = 10;
b = 20;

if (a = 10){
    console.log(a);
}

Output=10

if (a == 11){
    console.log('A is 10');
}else{
    console.log('A is not 10');
}

Output = A is not 10

if (b = 20){
    console.log('B is Greater tha 20');
}elsif{
    console.log('B is less than 20');
}else{
    sonsole.log('B is 20');
}

Output= B is 20


### **Q-11**    Find circumference of Rectangle formula : C = 4 * a ?

**ANS**
function Circumference(a) { 
    return 4 * a; 
} 
 
    let a = 5; 
    document.write("Circumference of"
        +" a square is "
        +Circumference(a)); 

Output= 20


### **Q-12**    WAP to convert years into days and days into years? 

**ANS**
 day = 6524;
 document.write(Math.floor(day / 365));
 year = 5;
 document.write(Math.floor(year * 365));


### **Q-13**    Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

**ANS**
function convertFahrenheitToCelsius(fahrenheit) {
    if (fahrenheit < -459.67) {
        return "Temperature below absolute zero is not possible!";
    }

    const celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}

const fahrenheit = 32;
const celsius = convertFahrenheitToCelsius(fahrenheit);

console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`);

Output= 32 degrees Fahrenheit is equal to 0.00 degrees Celsius


### **Q-14**    Write a JavaScript exercise to get the extension of a filename.? 

**ANS**
fileName
fileName = "Javascrip.js"

console.log(fileName.split('.).pop());

Output= js

fileName = "Assignment.css"

console.log(fileName.split('.).pop());

Output = css


### **Q-15**    What is the result of the expression (5 > 3 && 2 < 4)?

**ANS**
let a = 5
let b = 3
let c = 2
let d = 4
if (a > 3 && c < 4) {
  console.log(true);
  } else
   {console.log(false);
   
   };

   Output=True


### **Q-16**    What is the result of the expression (true && 1 && "hello")?

**ANS**
In JavaScript, the && operator 'logical AND' evaluates operands from left to right and returns the value of the first falsy operand or the last operand if all operands are truthy.

document.write(true && 2 && 'hello');

console.log(true && 1 && "hello");

Output= hello


### **Q-17**    What is the result of the expression true && false || false && true?

**ANS**
The expression true && false || false && true is evaluated based on operator precedence. In JavaScript, the logical AND (&&) operator has higher precedence than the logical OR (||) operator.

document.write((true && false) || (false && true));

console.log((true && false) || (false && true));

Output= false


### **Q-18**    What is a Loop and Switch Case in JavaScript define that ? 

**ANS**
A for loop is a control structure that allows you to repeat a block of code a certain number of times, while a switch case is a control structure that allows you to execute different blocks of code based on the value of an expression.


        for (let i = 0; i < 7; i++) {
            console.log(i)
        }

          let day;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }

        console.log(day)

        Output= Current day is defined


### **Q-19**    What is the use of is Nan function?

**ANS**
In JavaScript, the isNaN() function is used to determine whether a value is NaN (Not-a-Number). This function returns true if the value is NaN, and false otherwise.

console.log(isNaN(123));
Output= false, 123 is number

console.log(isNaN('Jayesh'));
Output = True 'Jayesh' can not be converted to a number

console.log(isNaN(NaN));
Output = True NaN is not a number

console.log(isNaN('123'));
Output = False '123' can be converted to the number 123


### **Q-20**    What is the difference between && and || in JavaScript?

**ANS**
In JavaScript, && and || are logical operators used for boolean operations. 

'&&' Logical AND 
a=20, b=10, c=a, d=10

console.log(a=c && a=b && b=d); False
console.log(b=d && c=a && d=b); True

(returns true if all true)

'||' Logical OR

console.log(a=c || a=b || d=b); True
console.log(b=d || c=a || a=c); True

(returns true if any true )


### **Q-21**    What is the use of Void (0)? 

**ANS**
JavaScript void 0 means returning undefined (void) as a primitive value. You might come across the term “JavaScript:void(0)” while going through HTML documents. It is used to prevent any side effects caused while inserting an expression in a web page.

`<!DOCTYPE html>`
`<html>`
`<head>`
`<title>without using JavaScript:void(0)</title>`
`<style>`
    body{
        displey:flex;
        aline-item:center;
    }
`</style>`
`</head>`
`<body>`

    <h2>This is without using JavaScript:void(0)</h2>

`<a href="#" ondblclick="alert('Task completed!')">Double Click Me!</a>`
`</body>`
`</html>`

Output = Double Click Alert


### **Q-22**    Check Number Is Positive or Negative in JavaScript?

**ANS**
let num1 = 5;
let num2 = -2;
let num3 = 0;

function checkNumber(num) {
    if (num1 > 0) {
        console.log(`${5} is positive.`);
    } else if (num2 < 0) {
        console.log(`${-2} is negative.`);
    } else {
        console.log(`${0} is zero.`);
    }
};

        CheckNumber(5); Output 5 is Positive
        CheckNumber(-2); Output -2 is Nagative
        CheckNumber(0); Output 0 is Zero


### **Q-23**    Find the Character Is Vowel or Not ? 

**ANS**
let yesAndNo = prompt('Enter your vowels  Character')
        let vowels =
            ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let result = vowels.includes(yesAndNo);
        document.write(result);


### **Q-24**    Write to check whether a number is negative, positive or zero?

**ANS**
let num1 = 5;
let num2 = -2;
let num3 = 0;

function checkNumber(num) {
    if (num1 > 0) {
        return "Positive";
    } else if (num2 < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
};

console.log(checkNumber(5));   Output: Positive
console.log(checkNumber(-2));  Output: Negative
console.log(checkNumber(0));   Output: Zero


### **Q-25**    Write to find number is even or odd using ternary operator in JS? 

**ANS**
function checkOddOrEven(num)  {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(checkOddOrEven(21));
console.log(checkOddOrEven(12));


### **Q-26**    Write find maximum number among 3 numbers using ternary operator in JS?

**ANS**

let num1 = 10;
let num2 = 5;
let num3 = 3;

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
};

  const largestNumber = findLargest(10, 5, 3);
  console.log("Largest number:", largestNumber);

  Output= 10


### **Q-27**    Write to find minimum number among 3 numbers using ternary operator in JS?

**ANS**
let a = 10, -1, 0
let b = 5, -5, 0
let c = 20, -10, 0

function findMin(a, b, c) {
    return (a < b ? (a < c ? a : c) : (b < c ? b : c));
};

console.log(findMin(10, 5, 20));    Output: 5
console.log(findMin(-1, -5, -10));  Output: -10
console.log(findMin(0, 0, 0));      Output: 0


### **Q-28**    Write to find the largest of three numbers in JS?

**ANS**
let a = 10, -1, 0
let b = 5, -5, 0
let c = 20, -10, 0

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log(findLargest(10, 5, 20));    Output: 20
console.log(findLargest(-1, -5, -10));  Output: -1
console.log(findLargest(0, 0, 0));      Output: 0


### **Q-29**    Write to show
i. Monday to Sunday using switch case in JS?
ii. Vowel or Consonant using switch case in JS? 

**ANS**

i. Monday to Sunday using switch case in JS?

          let day;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        };

        console.log(day);

Output = Curent day


ii. Vowel or Consonant using switch case in JS?


        function isVowel(Character) {
            let check = 'Consonant';
            switch (Character) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                
                check = 'Vowel';
            }
            return check;
        };

        // vowel
        document.write(isVowel('i'));

        //  Consonant
        document.write(isVowel('b'));


### **Q-30**    What are the looping structures in JavaScript? Any one Example?

**ANS**
In Javascrit loops are 3 types "for", "while", "do... while"
=> for loop: Used to iterate over a block of code a specified number of times.

=> while loop: Continues to execute a block of code as long as the specified condition remains true.

=> do...while loop: Similar to a while loop, but the block of code is executed at least once before the condition is tested.

For loop in Example

for (let i = 1; i <= 5; i++>){
    console.log(i);
};

Output = 1,2,3,4,5


### **Q-31**    Write a print 972 to 897 using for loop in JS?

**ANS**
for (let i = 972; i > 897; i--) {
  console.log(i)
  };

Output = 972 to 898

### **Q-32**    Write to print factorial of given number?

**ANS**
let number = prompt('please Enter Your Number')
        let fact = 1;
        if (number == 0) {
            console.log(`the fact 0f ${number} is 1 `)
        } else if (number < 0) {
            console.log(`the fact of is negative number not possibles`)
        } else {
            for (let i = 1; i <= number; i++) {
                fact = fact * i;
                console.log(fact)
            }
        };


### **Q-33**    Write to print Fibonacci series up to given numbers?

**ANS**
let a = 0;
        let b = 1;
        console.log(a)
        console.log(b)

        for (let i = 0; i <= 10; i++) {
            let add = a + b;
            console.log(add)
            a = b;
            b = add;
        };


### **Q-34**    Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

**ANS**
let num1 = 64728;
let result = num1.toString().split('').reverse().join('');

console.log(result);


### **Q-35**    Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

**ANS**
function digitSum(number) {
            let sum = 0;
            while (number > 0) {
                sum += number % 10;
                number = Math.floor(number / 10);
            }
            return sum;
        }

        let number = 1523;
        console.log(digitSum(number));

Output = 11

### **Q-36**    Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS? 

**ANS**
const sumFirstAndLastDigit = number =>
parseInt(number.toString()[0]) +
parseInt(number.toString().slice(-1));

const number = 1234;
console.log(sumFirstAndLastDigit(number));


### **Q-37**    Use console.log() and escape characters to print the following pattern in JS?
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

**ANS**
for (let i = 1; i <= 5; i++) {
            let result = "";
            for (let j = 1; j <= 5; j++) {
                if (j === 1) {
                    result += i + " ";
                } else {
                    result += Math.pow(i, j) + " ";
                }
            }
            console.log(result);
        }

### **Q-38**    Use pattern in console.log in JS?

**ANS**

### **Q-38-1**
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1 

**ANS**

let result = '';
        let counter = 0;
        for (i = 0; i < 5; i++) {
            for (j = 0; j < i; j++) {
                if (result.charAt(result.length - 1) == '1') {
                    result = result + '0';
                } else {
                    result = result + '1';
                }
            }
            result = result + '\n';
        };

        console.log(result);

### **Q-38-2**
A
B C
D E F
G H I J
K L M N O

**ANS**
 let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        let result = '';
        let counter = 0;
        for (i = 0; i < 5; i++) {
            for (j = 0; j < i; j++) {
                result = result + ' ' + alphabets[counter];
                counter++;
            }
            result = result + '\n';
        };

        console.log(result);

### **Q-38-3**
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

**ANS**
 let counter = 1;
        for (let i = 1; i <= 5; i++) {
            let result = "";
            for (let j = 1; j <= i; j++) {
                result = result + counter + ' ';
                counter++;
            }
            console.log(result);
        };

### **Q-38-4**
`*`
`* *`
`* * *`
`* * * *`
`* * * * *`

**ANS**
let result = '';
        let counter = 0;
        for (i = 0; i < 5; i++) {
            for (j = 0; j < i; j++) {
                result = result + '*';
            }
            result = result + '\n';
        };

        console.log(result);


### **Q-39**    Accept 3 numbers from user using while loop and check each numbers palindrome? 

**ANS**

function isPalindrome(num) {
    let reversedNum = parseInt(num.toString().split('').reverse().join(''));
    return num === reversedNum;
}

let count = 1;
while (count <= 3) {
    let number = prompt(`Enter number ${count}:`);
    if (isPalindrome(number)) {
        console.log(`${number} is a palindrome.`);
    } else {
        console.log(`${number} is not a palindrome.`);
    }
    count++;
};



### **Q-40**    Write a JavaScript Program to display the current day and time in the following format.Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

**ANS**
let day = new Date().getDate();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();

        let time = `${hours}:${minutes}:${seconds} ${hours < 12 ? 'AM' : 'PM'}`;

        let dayInDigit = new Date().getDay();
        // dayInDigit = 2;
        let dayInWord;
        switch (dayInDigit) {
            case 0:
                dayInWord = 'Sunday';
                break;
            case 1:
                dayInWord = 'Monday';
                break;
            case 2:
                dayInWord = 'Tuesday';
                break;
            case 3:
                dayInWord = 'Wednesday';
                break;
            case 4:
                dayInWord = 'Thursday';
                break;
            case 5:
                dayInWord = 'Friday';
                break;
            case 6:
                dayInWord = 'Saturday';
                break;
        }

        console.log(dayInWord);
        console.log(time)

        let result = `Current day is ${dayInWord} and current time is ${time}`;
        console.log(result);


### **Q-41**    Write a JavaScript program to get the current date? 

**ANS**
 let currentDate = new Date().getDate()
    console.log(currentDate);


### **Q-42**    Write a JavaScript program to compare two objects?

**ANS**

function compareObjects(obj1, obj2) {
    const jayesh = Object.jay(obj1);
    const navsad = Object.jay(obj2);

    if (jayesh.length !== navsad.length) {
        return false;
};

for (let jay of jayesh) {
        if (obj1[jay] !== obj2[jay]) {
            return false;
        }
    }

    return true;
};

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(compareObjects(obj1, obj2));  true
console.log(compareObjects(obj1, obj3));  false


### **Q-43**    Write a JavaScript program to convert an array of objects into CSV string?

**ANS**
const convertCSV = data =>
            [Object.keys(data[0]).join(','), ...data.map(obj => Object.values(obj).join(','))].join('\n');

        const data = [
            { name: 'jayesh', age: 30, city: 'Somnath' },
            { name: 'Bharat', age: 25, city: 'Ahemdabad' },
            { name: 'Dhiraj', age: 22, city: 'Surat' }
        ];

        const csvString = convertCSV(data);
        console.log(csvString);


### **Q-44**    Write a JavaScript program to capitalize first letter of a string?

**ANS**
let myString = 'jayesh';

        let upperJayesh = myString[0].toUpperCase();
        console.log(upperJayesh)

        let sliceJayesh = myString.slice(1, myString.length);
        console.log(sliceJayesh);

        let resultedName = upperJayesh + sliceJayesh;
        console.log(resultedName);


### **Q-45**    Write a JavaScript program to determine if a variable is array?

**ANS**
In array types of .push(), .pop(), .shift(), .unshift(), .join(), .slice(), .splice(), .lenth() in used to javascript.

function isArray(variable) {
            return Array.isArray(variable)
        };

        let arr = [1, 2, 3];
        let notArr = "This is not an array";

        console.log(isArray(arr));    True
        console.log(isArray(notArr)); false



### **Q-46**    Write a JavaScript program to clone an array? 

**ANS**
let cloneArray = [1, 2, 3, 4, 5];

        let clone = cloneArray.slice();

        console.log(clone);

        Output = [1,2,3,4,5]



### **Q-47**    What is the drawback of declaring methods directly in JavaScript objects? 

**ANS**
let myObject = {
    try() {
        console.log("front end");
    }
};

const obj1 = Object.create(myObject);
const obj2 = Object.create(myObject);

console.log(obj1.method === obj2.method);  True


### **Q-48**    Print the length of the string on the browser console using console.log()? 

**ANS**
let str = "bro  w e ser  u si ng 1 fr ont e nd";
console.log(str.length);

Output = 35


### **Q-49**    Change all the string characters to capital letters using toUpperCase() method? 

**ANS**
let main = 'jayesh mer'
        let toUpperCase = main.toUpperCase();
        console.log(toUpperCase);


### **Q-50**    What is the drawback of declaring methods directly in JavaScript objects?

**ANS**
let myObject = {
    try() {
        console.log("devloper");
    }
};

const obj1 = Object.create(myObject);
const obj2 = Object.create(myObject);

console.log(obj1.method === obj2.method);  True


### **Q-51**    Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

**ANS**
let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let year = new Date().getFullYear();

        console.log(`${month}/${day}/${year}`);



        let month2 = new Date().getMonth() + 1;
        let day2 = new Date().getDate();
        let year2 = new Date().getFullYear();

        console.log(`${day}/${month}/${year}`);


### **Q-52**    Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

**ANS**
let str = "30 Days Of JavaScript";
let position = str.indexOf("a");

console.log(position);  Output= 4


### **Q-53**    Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript? 

**ANS**
let str = "30 Days Of JavaScript";
let position = str.lastIndexOf("a");

console.log(position);  Output= 17


### **Q-54**    Form Validtion in JS? 

**ANS**
`<!DOCTYPE html>`
`<html lang="en">`

`<head>`
    `<meta charset="UTF-8">`
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    `<title>Document</title>`
    `<style>`
        .main-f {
            width: 30%;
        }

        #number,
        #email,
        #password {
            width: 100%;
        }
    </style>
`</head>`
`<body>`
    `<div class="main-f">`
        `<form action="">`
            `<label for="">phone</label>`
            `<div class="phone">`
                `<input type="number" id="number" placeholder="number">`
            `</div>`
            `<label for="">Email</label>`
            `<div class="email">`
                `<input type="email" id="email" placeholder="email">`
            `</div>`
            `<label for="">password</label>`
            `<div class="password">`
               ` <input type="password" id="password" placeholder="password">`
           ` </div>  `
            `<div class="button">`
                `<input type="submit" id="button" value="Send Me">`
            `</div>`
        `</form>`
    `</div>`

   `</script>`
        `<!-- === phoneNumber Validation  ===  -->`

        let phoneNumber = document.getElementById('number');
        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let phoneNumberValue = document.getElementById('number').value;
            checkNumber(phoneNumberValue)
        });
        function checkNumber(phoneNumber) {
            console.log(!phoneNumber.includes('0000000000') && phoneNumber.length >= 10 && !phoneNumber.includes('+1'))
        }


        <!-- ===== Email Validation  ===== -->

        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let emailValue = document.getElementById('email').value;
            checkEmail(emailValue)
        });

        function checkEmail(emailName) {

            console.log(
                emailName.includes('@') && emailName.includes('.') && !emailName.includes('@.') && emailName.slice(0, emailName.includes('@')) != '' && emailName.slice(emailName.indexOf('.') + 1) != ''
            );
        }

         `<!-- =====  password validation ===== -->`


        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let passwordValue = document.getElementById('password').value;
            isValidPassword(passwordValue)
        });


        function isValidPassword(passwordValue) {
            let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,}$/;
            console.log(pattern.test('passwordValue'))
        }

        isValidPassword('passwordValue')

    `</script>
`</body>`
`</html>`


### **Q-55**    Form in Email, number, Password, Validation?

**ANS**
`</head>`
`<body>`
    `<div class="main-f">`
        `<form action="">`
            `<label for="">phone</label>`
            `<div class="phone">`
                `<input type="number" id="number" placeholder="number">`
            `</div>`
            `<label for="">Email</label>`
            `<div class="email">`
                `<input type="email" id="email" placeholder="email">`
            `</div>`
            `<label for="">password</label>`
            `<div class="password">`
               ` <input type="password" id="password" placeholder="password">`
           ` </div>  `
            `<div class="button">`
                `<input type="submit" id="button" value="Send Me">`
            `</div>`
        `</form>`
    `</div>`

</script>
       `<!-- ==== phoneNumber Validation  ====  -->`

        let phoneNumber = document.getElementById('number');
        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let phoneNumberValue = document.getElementById('number').value;
            checkNumber(phoneNumberValue)
        });
        function checkNumber(phoneNumber) {
            console.log(!phoneNumber.includes('0000000000') && phoneNumber.length >= 10 && !phoneNumber.includes('+1'))
        }


        <!-- ====== Email Validation  ====== -->

        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let emailValue = document.getElementById('email').value;
            checkEmail(emailValue)
        });

        function checkEmail(emailName) {

            console.log(
                emailName.includes('@') && emailName.includes('.') && !emailName.includes('@.') && emailName.slice(0, emailName.includes('@')) != '' && emailName.slice(emailName.indexOf('.') + 1) != ''
            );
        }

         <!-- =====  password validation ====== -->


        let button = document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault()
            let passwordValue = document.getElementById('password').value;
            isValidPassword(passwordValue)
        });


        function isValidPassword(passwordValue) {
            let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,}$/;
            console.log(pattern.test('passwordValue'))
        }

        isValidPassword('passwordValue')

    </script>


### **Q-56**    Dynamic Form Validation in JS?

**ANS**
`<!DOCTYPE html>`
`<html>`
`<head>`
    `<title>Dynamic Form Validation</title>`
    `<style>`
        .error {
            color: red;
        }
    `</style>`
`</head>`
`<body>`
    `<form id="myForm" onsubmit="return validateForm()">`
        `<label for="name">Name:</label>` 
        `<input type="text" id="name" name="name"><span id="nameError" class="error"></span><br><br>`
        `<label for="email">Email:</label>`
        `<input type="email" id="email" name="email"><span id="emailError" class="error"></span><br><br>`
        `<label for="age">Age:</label>`
        `<input type="number" id="age" name="age"><span id="ageError" class="error"></span><br><br>`
        `<input type="submit" value="Submit">`
    `</form>`

    <script>
        function validateForm() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let age = document.getElementById('age').value;
            let isValid = true;

            if (name === "") {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            } else {
                document.getElementById('nameError').textContent = '';
            }

            if (email === "") {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else {
                document.getElementById('emailError').textContent = '';
            }

            if (age === "" || isNaN(age) || age < 18) {
                document.getElementById('ageError').textContent = 'Age must be a number and at least 18';
                isValid = false;
            } else {
                document.getElementById('ageError').textContent = '';
            }

            return isValid;
        }
    </script>
`</body>`
`</html>`


### **Q-57**    how many type of JS Event? How to use it ?

**ANS**
Event list
=> click
=> mouseover
=> mouseleave
=> keypress
=> keypdown
=> focus

`<!DOCTYPE html>`
`<html lang="en">`
 `<head>`
    `<meta charset="UTF-8" />`
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
    `<title>Document</title>`
  `</head>`
  `<body>`
    `<div class="box">This is some random text</div>`
    `<button>Submit</button>`
   `<script>`
      let submitBtn = document.getElementsByTagName('button')[0];
      let box = document.getElementsByClassName('box')[0];

      submitBtn.addEventListener('click', function () {
        box.style.color = 'brown';
        box.style.width = '200px';
      });
      submitBtn.addEventListener('dblclick', function () {
        box.style.color = 'red';
        box.style.backgroundColor = 'grey';
      });
      //   submitBtn.addEventListener('mouseover', function () {
      //     box.style.color = 'blue';
      //   });
      //   submitBtn.addEventListener('mouseleave', function () {
      //     box.style.color = 'black';
      //   });
      submitBtn.addEventListener('focus', function () {
        box.style.fontSize = '1.5rem';
      });

      document.addEventListener('keydown', function (event) {
        console.log(event.key);
      });
      submitBtn.addEventListener('blur', function (event) {
        console.log('Im blurred');
      });

      submitBtn.onmouseover = function () {
        console.log('Submit btn hovered');
      };
    </script>
  `</body>`
`</html>`



### **Q-59**    What is Bom vs Dom in JS?

**ANS**
DOM (Document Object Model)
         The DOM represents the structure of an HTML document as a hiefrchical tree of nodes.
        Each node  to an element, attrbute, or text within the document. The DOM provides a way for JavaScript
        to interact with and manipulate the content, structure, and style of the HTML document dynamic. It allows
        developers to access, create, modify, and delete HTML elements and their attributes using JavaScript.

        Example of DOM manipulation:

        document.getElementById("demo").innerHTML = "Hello World!";

      

BOM(Browser Object Model)
            The BOM represents the browser's window and its properties, which are not directly related to the document's content. It includes objects such as window, navigator, location, screen, history and document. The BOM provides JavaScript with functionalities to interact with the browser itself, manipulate the browser window, control navigation, handle cookies, prompt alerts, set timers, and more.
         

         Example of BOM 

        let newWindow = window.open('');
        window.alert('This is an alert!');
        window.setTimeout(() => {
            console.log('Times out');
        }, 1500);
   

### **Q-60**    Array vs object defences in JS?

**ANS**
In JavaScript, both arrays and objects are data
structures used to store collections of values, but they have different characteristics and use cases. Here's a comparison of arrays and objects in terms of their features and typical use cases:

        =>  Arrays
        1.Use square brackets ([]) to define an array literal.
        2.Elements are accessed by their numerical index.
        [Example]:-
        let names = ['Jayesh', 'Dhiraj', 'BHarat'];
        console.log(names[0]);

        ------------------------------

        =>  Objects
        1.Unordered collection of key-value pairs.
        2.Use curly braces ({}) to define an object literal.
        [Example]:-
        const person = {
            name: 'Dhiraj',
            age: 25,
            city: 'Somnath'
        };
        console.log(person.age);



### **Q-61**    Split the string into an array using split() Method?

**ANS**
let string = "mengo,greps,pinepal";
let array = string.split(",");
console.log(array);


### **Q-62**    Check if the string contains a word Script using includes() method?

**ANS**
let str = "JavaScript is a scripting language";
let word = "Script";

if (str.includes(word)) {
    console.log("The string contains the word 'Script'");
} else {
    console.log("The string does not contain the word 'Script'");
};

Output = The string contains the word 'Script'


### **Q-63**    Change all the string characters to lowercase letters using toLowerCase() Method.

**ANS**
        let characters = 'MY NAME IS MER JAYESH';
        let Change = characters.toLowerCase();
        console.log(Change)


### **Q-64**    What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

**ANS** 
        let str = '30 Days of JavaScript';
        let char = str.charAt(15);
        console.log(char);

        Output = S


### **Q-65**    copy to one string to another string in JS?

**ANS**
        const originalString = 'I am Web development Engineer ';
        let copiedString = originalString;
        console.log(copiedString);


### **Q-66**    Find the length of a string without using libraryFunction?

**ANS**
        let myString = "Web Development Engineer";
        let length = myString.split('').length;
        console.log(length);

        Output = 24

### **Q-66-1**  What is JavaScript?

**ANS**
JavaScript is a scripting language used to create and control dynamic website content.JavaScript is a Client Side Scripting and Programming language



### **Q-66-2**  What is the use of isNaN function?

**ANS**
console.log(isNaN(123));     Output = false

console.log(isNaN('hello')); Output = true


### **Q-66-3**  What is negative Infinity?

**ANS**

In JavaScript, Infinity is a numeric value that represents positive infinity. It is a special value that is greater than any other number.

On the other hand, -Infinity (negative infinity) is a numeric value that represents negative infinity. It is a special value that is less than any other number, including negative numbers.

console.log(Infinity);    Output = Infinity
console.log(-Infinity);   Output = -Infinity

console.log(10 / 0);      Output = Infinity
console.log(-10 / 0);     Output = -Infinity


### **Q-66-4**  Which company developed JavaScript?

**ANS**
JavaScript was developed by Netscape Communications Corporation, specifically by Brendan Eich in 1995. Initially, it was called Mocha, but later it was renamed to LiveScript and then to JavaScript.


### **Q-66-5**  What are undeclared and undefined variables?

**ANS**
=>  Undeclared and undefined variables are both related to variables in JavaScript, but they refer to different situations

=>  Undeclared Variables:-
An undeclared variable is a variable that has been used in code without being declared using the var, let, or const keyword. This is considered bad practice and can lead to unexpected behavior. When you try to use an undeclared variable, JavaScript will either create a global variable or throw a ReferenceError.

Example =>
=> Undeclared variable
Var = 10; 
console.log(Var);
Output= 10

=>  Undefined Variables:-
 An undefined variable is a variable that has been declared but has not been assigned a value. When you try to access an undefined variable, its value will be undefined.

 Example =>
 let myVar;
console.log(myVar);
Output= undifined


### **Q-66-6**  Write the code for adding new elements dynamically?

**ANS**
`<!DOCTYPE html>`
`<html>`
`<head>`
    `<title>Add Element Dynamically</title>`
`</head>`
`<body>`
    `<ul id="myList">`
        `<li>Item 1</li>`
        `<li>Item 2</li>`
        `<li>Item 3</li>`
    `</ul>`
    `<button onclick="addElement()">Add Element</button>`

    <script>
        function addElement() {
            let newItem = document.createElement('li');
           
            newItem.textContent = 'New Item';
            
            let list = document.getElementById('myList');
            
            list.appendChild(newItem);
        };
    </script>
`</body>`
`</html>`


### **Q-66-7**  What is the difference between ViewState and SessionState?

**ANS**
ViweState =>
=>  Is sent back and forth between the server and client, taking up bandwidth
=>  Has no expiration date
=>  Is useful in a Web Farm / Web Garden

SessinState =>
=>  Can be persisted in memory, which makes it a fast solution. Which means state cannot be shared in the Web Farm / Web Garden.
=>  Can be persisted in a Database, useful for Web Farm / Web Gardens
=>  Is Cleared when the session dies - usually after 20 min of inactivity.


### **Q-66-8**  What is === operator?

**ANS**
=> In javaScript the === operator is called the "strict equality operator" It compares two values for equality without performing any type conversion. it returns 'true' if the operands are equal and of the same type. Otherwise, it returns 'false'.

Example :-
a=20;
b=10;
c=a;
d='10';

---Assignment Operator----
console.log(c);     20

---equality Operator----
console.log(a == b);    false
console.log(b == d);    true

---strict equality operato----
console.log(a === c);   true
console.log(a === b);   false

---Typeof operator----
console.log(typeof a); Number
console.log(typeof d); string

----Arithmetic Operator----
console.log(a + b);     30
console.log(b - a);     -10



### **Q-66-9**  How can the style/class of an element be changed?

**ANS**
        You can change the style or class of an HTML element using JavaScript

        EXAMPLE:-
        document.getElementById("myElement").style.backgroundColor = "red";
        .classChange {
        background-color: yellow;
        }
        document.getElementById("myElement").classList.add("classChange");
        document.getElementById("myElement").classList.remove("classChange");
        document.getElementById("myElement").classList.toggle("classChange");


### **Q-66-10** How to read and write a file using JavaScript?

**ANS**
The fs.readFile() and rs.writeFile() methods are used to read and write of a file using javascript. The file is read using the fs.readFile() function, which is an inbuilt method.

Example :-
fs.readFile( file_name, encoding, callback_function );

The fs.writeFile() function is used to write data to a file in an asynchronous manner. If the file already exists, it will be replaced.

Example:-
fs.writeFile( file_name, data, options, callback );


### **Q-66-11** What are all the looping structures in JavaScript?

**ANS**
The loops are types
=>  for loop
=>  while loop
=>  do...while loop
=>  for-in loop
=>  for-of loop

=> for loop
let result = 0;
    for (count = 1; count < 101; count++){
        result=result + count;
    };

    console.log(result);

    Output= 5050

=> while loop
let result = 0;
    count = 0;
    while (count <= 100 ){
        result = result + count;
        count++;
    };
        console.log(result);

        Output= 5050

=> do....while loop
let result = 0;
    let count = 0;
    do{
        result = result + count;
        count++;
    } while(count <= 100);

    console.log(result);

    Output= 5050

=> for-in loop
numbers = [10,11,12,13,14,15];
    let result = 0;
    for (item in numbers);
    result = result + item;

    console.log(result);

    Output= 0012345


     numbers = [10,11,12,13,14,15];
        let result = 0
        for (item of numbers)
        result = result + item;

        console.log(result);

        output= 75

### **Q-66-12** How can you convert the string of any base to an integer in JavaScript?

**ANS**
In JavaScript converting a string to an integer means transforming a string that represents a numeric value into an actual integer data type. This is useful when you need to perform arithmetic operations or comparisons on numeric values stored as strings.

=>  parseInt( Value, radix )

let a = "100";

console.log("Type of a before conversion: " + typeof a);
console.log("Type of a after conversion: " + typeof parseInt(a));

Output= Type of a before conversion: string
Output= Type of a after conversion: number

Number( value )

let age = "23";
let name = "Dhiraj";

console.log(
    "Type of name and age before conversion: ", 
    typeof age, typeof name
);

console.log(
    "Type of name and age after conversion: ", 
    typeof Number(age), typeof Number(name)
);

Output= Type of name and age before conversion:  string string
Output= Type of name and age after conversion:  number number

### **Q-66-13** What is the function of the delete operator?

**ANS**
        const person = { name: 'Jayesh', age: 28 };
        delete person.age;
        console.log(person);

        Output= age deleted and name: 'jayesh' present

        // 2.Deleting Array Elements
        const numbers = [1, 2, 3, 4, 5];
        delete numbers[1];
        console.log(numbers);

        Output = [1,empty,3,4,5]


### **Q-66-14** What are all the types of Pop up boxes available in JavaScript?

**ANS**
JavaScript has three kind of popup boxes:-
=> Alert box
=> Confirm box
=> Prompt box

`<!DOCTYPE html>`
`<html>`
`<head>`
    `<title></title>`
`</head>`
`<body>`
        `<button onclick="Alert('This is jayesh')">`
            Show alert dialog
        `</button>`
        `<button onclick="confirm('Are you sure')">`
            Show confirm dialog
        `</button>`
        <button onclick="prompt('Enter your name')"
            Show prompt dialog
        </button>
         
        <script>
            alert('this is jayesh');
            confirm('enter Your name');
            prompt('enter your age');
        </script>
    </center> 
</body>
</html>


### **Q-66-15** What is the use of Void (0)?

**ANS**
JavaScript void 0 means returning undefined (void) as a primitive value. You might come across the term “JavaScript:void(0)” while going through HTML documents. It is used to prevent any side effects caused while inserting an expression in a web page.

`<!DOCTYPE html>`
`<html>`
`<head>`
`<title></title>`
`</head>`
`<body align="center">`

    <h2>This is without using JavaScript:void(0)</h2>

`<a href="#" ondblclick="alert('Task completed!')">Double Click Me</a>`

`</body>`
`</html>`


### **Q-66-16** How can a page be forced to load another page in JavaScript?

**ANS**
In JavaScript, we can use window. location object to force a page to load another page. We can use the location object to set the URL of a new page.

 `<button onclick="forceLoad()">Load</button>`
   `<script>`
      function forceLoad() {
         window.location.href = "https://www.google.co.in";
      };

      function forceLoad() {
         window.location.replace("https://www.google.co.in");
      };

      function forceLoad() {
         location.assign("https://www.google.co.in");
      };
   `</script>`

    <li>Using window.location.href="link";</li>
    <li>window.location.assign("link")</li>
    <li>window.location.replace("");</li>


### **Q-66-17** What are the disadvantages of using innerHTML in JavaScript?

**ANS**
It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time. When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML.

`<script>`
      function Change()
      {
         let p = document.getElementById('demo');
         p.innerHTML = '<span>Hello World</span>';
      };
   `</script>`





