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

**ANS.** function mul(a) {
            return function(b){
                return function(c){
                    return a * b * c ;
                };
            }
}

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
      //   currentMonth = new Date().getMonth();
      currentMonth = 28;
      //   console.log(currentDay);
      //   console.log(currentMonth);

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
      //   console.log(daysLeftIncurrentMonth);
      //   console.log(daysLeftTillDecMonth);

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

### **Q-38-2**
A
B C
D E F
G H I J
K L M N O

**ANS**

### **Q-38-3**
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

**ANS**

### **Q-38-4**
`*`
`* *`
`* * *`
`* * * *`
`* * * * *`

**ANS**


### **Q-39**    Accept 3 numbers from user using while loop and check each numbers palindrome? 

**ANS**


### **Q-40**    Write a JavaScript Program to display the current day and time in the following format.Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

**ANS**


### **Q-41**    Write a JavaScript program to get the current date? 

**ANS**


### **Q-42**    Write a JavaScript program to compare two objects?

**ANS**


### **Q-43**    Write a JavaScript program to convert an array of objects into CSV string?

**ANS**


### **Q-44**    Write a JavaScript program to capitalize first letter of a string?

**ANS**


### **Q-45**    Write a JavaScript program to determine if a variable is array?

**ANS**


### **Q-46**    Write a JavaScript program to clone an array? 

**ANS**


### **Q-47**    What is the drawback of declaring methods directly in JavaScript objects? 

**ANS**


### **Q-48**    Print the length of the string on the browser console using console.log()? 

**ANS**


### **Q-49**    Change all the string characters to capital letters using toUpperCase() method? 

**ANS**


### **Q-50**    What is the drawback of declaring methods directly in JavaScript objects?

**ANS**


### **Q-51**    Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

**ANS**


### **Q-52**    Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

**ANS**


### **Q-53**    Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript? 

**ANS**


### **Q-54**    Form Validtion in JS? 

**ANS**


### **Q-55**    Form in Email, number, Password, Validation?

**ANS**


### **Q-56**    Dynamic Form Validation in JS?

**ANS**


### **Q-57**    how many type of JS Event? How to use it ?

**ANS**


### **Q-59**    What is Bom vs Dom in JS?

**ANS**


### **Q-60**    Array vs object defences in JS?

**ANS**


### **Q-61**    Split the string into an array using split() Method?

**ANS**


### **Q-62**    Check if the string contains a word Script using includes() method?

**ANS**


### **Q-63**    Change all the string characters to lowercase letters using toLowerCase() Method.

**ANS**


### **Q-64**    What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

**ANS**


### **Q-65**    copy to one string to another string in JS?

**ANS**


### **Q-66**    Find the length of a string without using libraryFunction?

**ANS**

### **Q-66-1**  What is JavaScript?

**ANS**

### **Q-66-2**  What is the use of isNaN function?

**ANS**


### **Q-66-3**  What is negative Infinity?

**ANS**


### **Q-66-4**  Which company developed JavaScript?

**ANS**


### **Q-66-5**  What are undeclared and undefined variables?

**ANS**


### **Q-66-6**  Write the code for adding new elements dynamically?

**ANS**


### **Q-66-7**  What is the difference between ViewState and SessionState?

**ANS**


### **Q-66-8**  What is === operator?

**ANS**


### **Q-66-9**  How can the style/class of an element be changed?

**ANS**


### **Q-66-10** How to read and write a file using JavaScript?

**ANS**


### **Q-66-11** What are all the looping structures in JavaScript?

**ANS**


### **Q-66-12** How can you convert the string of any base to an integer in JavaScript?

**ANS**


### **Q-66-13** What is the function of the delete operator?

**ANS**


### **Q-66-14** What are all the types of Pop up boxes available in JavaScript?

**ANS**


### **Q-66-15** What is the use of Void (0)?

**ANS**


### **Q-66-16** How can a page be forced to load another page in JavaScript?

**ANS**


### **Q-66-17** What are the disadvantages of using innerHTML in JavaScript?

**ANS**





