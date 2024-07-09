# *** JavaScript Assignment ***


### **Q-1** Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. Using console.log() print out the following quote by Mother Teresa:

**ANS.**   

    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

    Output = The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

    console.log("Mother Teresa");

    Output = Mother Teresa

### **Q-2** Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

**ANS.** 

    let str = '10';
    let num = 10;

    if (typeof str !== typeof num){
        str = Number(str);
    }

    if (str === num){
        console.log('str and num are exactly equal.');
    }
    else {
        console.log('str and num are not exactly equal.');
    }

    Output = str and num are exactly equal.



### **Q-3** Write a javaScript Program to find the area of a triangle ?

**ANS.** 


    function triangleArea(base, height) {
    return 0.5 * base * height;
    }

    let baseLength = 10;
    let heightLength = 5;
    let area = triangleArea(baseLength, heightLength);
    console.log(`The area of the triangle is: ${area}`);

    Output = The area of the triangle is: 25


### **Q-4** Write a JavaScript program to calculate days left until next Christmas?

**ANS**


      let currentDay = new Date().getDate();
        let currentMonth = new Date().getMonth();
        console.log(currentDay);

      let countOfDayInCurrentMonth;
      if (currentMonth == '6')
       {
        countOfDayInCurrentMonth = 30;
       } 
      else (currentMonth == '7') 
      {
        countOfDayInCurrentMonth = 31;
      } 

      daysLeftInCurrentMonth = countOfDayInCurrentMonth - currentDay;
      daysLeftTillDecMonth = 31 + 30 + 31 + 30;

      daysLeftTillChristmasFromToday =
        daysLeftInCurrentMonth + daysLeftTillDecMonth + 25;

      console.log(daysLeftTillChristmasFromToday);



### **Q-5**    What is Condition Statement? 

**ANS**
1.if Statement

                  let a = 40;
                  let b = 30;

                  if (a == b) {
                      console.log('Right condition')
                  } if (a > b) {
                      console.log('not can be Right condition')
                  };

2.if-else Statement

                let age = 30;

                   if (age >=18) {
                       console.log("You are eligible of driving license")
                   } else {
                       console.log("You are not eligible for driving license")
                   };



3.else if Statement

                   let num = 10;

                   if (num > 10) {
                       console.log("Given number is positive.");
                   } else if (num < 10) {
                       console.log("Given number is negative.");
                   } else {
                       console.log("Given number is zero.");
                   };



4.switch Statement

                   const marks = 75;

                   let Subject;

                   switch (true) {
                       case marks >= 80:
                           Subject = "Mathas";
                           break;
                       case marks >= 70:
                           Subject = "English";
                           break;
                       case marks >= 60:
                           Subject = "Science";
                           break;
                       case marks >= 50:
                           Subject = "Social Science";
                           break;
                       case marks >= 40:
                           Subject = "Gujarati";
                           break;
                       default:
                           Subject = "Computer";
                           break;
                   }

                   console.log(`Student Subject name is : ${Subject}`);

5.Ternary Operator

                      let age = 21;

                       const result =
                           (age >= 18) ? "You are eligible to driving license."
                               : "You are not eligible to driving license.";

                       console.log(result);


### **Q-6**    Find circumference of Rectangle formula : C = 4 * a ?

**ANS**

        let r = 4;
        let a = 20;
        let c = 2 * 3.14 * r;

        console.log(c);

        Output = 25.12

### **Q-7**    WAP to convert years into days and days into years? 

**ANS**

    day = 5840;
    console.log(Math.floor(day / 365));
    Output = 16 


    year = 4;
    console.log(Math.floor(year * 365));
    Output = 1460

### **Q-8**    Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

**ANS**

    let F = prompt("Enter temperature in Fahrenheit: ");
    let celsius = (F - 32) * 5/9;
    console.log(`The temperature in Celsius is ${celsius.toFixed(2)}`);

    let C = prompt("Enter temperature in Celsius: ");
    let fahrenheit = (C * 9/5) + 32;
    console.log(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}`);


### **Q-9**    Write a JavaScript exercise to get the extension of a filename.? 

**ANS**

    fileName = 'mahesh.html';
    fileName = 'mahesh.css';
    fileName = 'mahesh.php';

    let indexOfMahesh = fileName.indexOf('.');
    console.log(indexOfMahesh)
    console.log('mahesh.in'.slice(fileName.indexOf('.')))

    output = .in


### **Q-10**    What is the result of the expression (5 > 3 && 2 < 4)?

**ANS**

    The expression (5 > 3 && 2 < 4) is true.

    This is because 5 > 3 is 'true' and 2 < 4 is also 'true'. 
    In a logical AND operation (&&), both conditions must be true for the entire expression to be 'true'.


### **Q-11**    What is the result of the expression (true && 1 && "hello")?

**ANS**

    ==> In JavaScript, the && (AND) (returns true if any true) operator expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value.

    ==> (true && 1 && "hello")

    => `true` is a truthy value.
    => `1` is also a truthy value.
    => `"hello"` is a truthy value as well.

    => Since all the values are truthy, the && operator will return the last value, which is "hello".

    => Therefore, the result of the expression (true && 1 && "hello") is "hello".

    console.log(true && 1 && "hello");

    Output= hello


### **Q-12**    What is the result of the expression true && false || false && true?

**ANS**

    ==> In JavaScript, the logical operators && (AND) and || (OR) have specific behaviors. The && operator has  higher precedence than the || operator, so it is evaluated first.

    => true && false || false && true

    => Evaluate the first part: true && false

    => true && false evaluates to false because both operands must be true for the && operator to return true.
    Evaluate the second part: false && true

    => false && true evaluates to false because both operands must be true for the && operator to return true.
    => false || false evaluates to false because at least one operand must be true for the || operator to return true.
    => Therefore, the result of the expression true && false || false && true is false.

    console.log((true && false) || (false && true));

    Output= false


### **Q-13**    Check Number Is Positive or Negative in JavaScript?

**ANS**


    const number = prompt("Enter a number");
        if (number > 0) {
            console.log("The number is positive");
        }
        else if (number < 0) {
            console.log("The number is negative");
        };
        


### **Q-14**    Find the Character Is Vowel or Not ? 

**ANS**

    let yesAndNo = prompt('Enter your vowels  Character')
        let vowels =
            ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let result = vowels.includes(yesAndNo);
        document.write(result);


### **Q-15**    Write to check whether a number is negative, positive or zero?

**ANS**

    const number = prompt("Enter a number");
        if (number > 0) {
            console.log("The number is positive");
        }
        else if (number < 0) {
            console.log("The number is negative");
        }
        else {
            console.log("The number is zero");
        };



### **Q-16**    Write to find number is even or odd using ternary operator in JS? 

**ANS**

    const number = prompt("Enter a number: ");

    if(number % 2 == 0) {
        console.log("The number is even.");
    }

    else {
        console.log("The number is odd.");
    };       


### **Q-17**    Write find maximum number among 3 numbers using ternary operator in JS?

**ANS**

    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const num3 = parseFloat(prompt("Enter third number: "));
    let maximum;

    if(num1 >= num2 && num1 >= num3) {
        maximum = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        maximum = num2;
    }
    else {
        maximum = num3;
    }

    console.log("The maximum number is ", maximum);


### **Q-18**    Write to find minimum number among 3 numbers using ternary operator in JS?

**ANS**

    => This function compares the three numbers using nested ternary operators. The first comparison checks if `a` is less than `b`, and within that check, it also compares `a` with `c` to determine the smallest value. If `a` is not less than `b`, it then compares `b` with `c` to find the minimum.

    function findMinimum(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
    };

    console.log(findMinimum(3, 5, 1));  Output: 1
    console.log(findMinimum(7, 2, 5));  Output: 2
    console.log(findMinimum(9, 9, 9));  Output: 9
        


### **Q-19**    Write to find the largest of three numbers in JS?

**ANS**

    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const num3 = parseFloat(prompt("Enter third number: "));
    let largest;

    if(num1 >= num2 && num1 >= num3) {
    largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    }
    else {
    largest = num3;
    }

    console.log("The largest number is ", largest);


### **Q-20**    Write to show

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


### **Q-21**    What are the looping structures in JavaScript? Any one Example?

**ANS**

    ==> The JavaScript loops are used to iterate the piece of code using for, while, do while, for-in or for-of loops. It makes the code compact. It is mostly used in array.

    =>There are five types of loops in JavaScript.

    JavaScript Loop Statements:-

    => `for`        Loops a coode block while a condition is true
    => `while`      Loops a coode block while a condition is true
    => `do...while` Loops a coode block once and then while a condition is true
    => `for...of`   Loops the values of any iterable
    => `for...in`   Loops the used for iterating over object properties   

    1.for loop

        let result = 0;
        for(count = 1; count < 101; count++){
            result = result + count;
        };

        console.log(result);

        Output = 5050


    2. while loop

        let result = 0;
        count = 0;
        while (count <= 100){
            result = result + count;
            count ++;
        };
        
        console.log(result);

        Output = 5050


    3. do...while loop
        let result = 0;
        count = 0;
        do{
            result = result + count;
            count ++;
        }
        while (count <= 100);
        
        console.log(result);
        Output = 5050

### **Q-22**    Write a print 972 to 897 using for loop in JS?

**ANS**

    for (let i = 972; i > 897; i--) {
    console.log(i)
    };

    Output = 972 to 898

### **Q-23**    Write to print factorial of given number?

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


### **Q-24**    Write to print Fibonacci series up to given numbers?

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


### **Q-25**    Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

**ANS**

    let num1 = 64728;
    let result = num1.toString().split('').reverse().join('');

    console.log(result);


### **Q-26**    Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

**ANS**

    function sum_Of_Digits(n) {
    if (n < 0) n = -n
    let result = 0

    while (n > 0) 
    {
        result -= n % 10
        n = Math.floor(n / 10)
    }

    return result
    }
    console.log(sum_Of_Digits(1523));

        Output = -11

### **Q-27**    Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS? 

**ANS**

    function sumFirstAndLastDigit(number) {
    const numberString = number.toString();

    const firstDigit = parseInt(numberString[0]);
    const lastDigit = parseInt(numberString[numberString.length - 1]);
    
    const sum =  - firstDigit - lastDigit;
    
    return sum;
    }
    const number = 1234;
    const result = sumFirstAndLastDigit(number);
    console.log(result);

    Output = -5


### **Q-28**    Use console.log() and escape characters to print the following pattern in JS?
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

**ANS**

        function pattern(results) {

        for (i = 1; i <= results; i++) 
        {
            let result = '';

            for (j = 1; j <= 5; j++) {

            if (j === 1) {
                result += i;

            } else if (j === 2) {
                result += ' 1';

            } else if (j === 3) {
                result += ' ' + i;

            } else if (j === 4) {
                result += ' ' + i ** 2;

            } else if (j === 5) {
                result += ' ' + i ** 3;
            }
            }
            console.log(result);
        }
        }

        pattern(5);

### **Q-29**    Use pattern in console.log in JS?

**ANS**

### **Q-29-1**
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

            

### **Q-29-2**
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

### **Q-29-3**
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



### **Q-29-4**
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


### **Q-30**    Accept 3 numbers from user using while loop and check each numbers palindrome? 

**ANS**

        let i = 0;
        while (i < 3) {
        const num = parseInt(prompt(`Enter number ${i+1}:`));
        const numStr = num.toString();
        const reversedNumStr = numStr.split("").reverse().join("");
        if (numStr === reversedNumStr) {
            console.log(`${num} is a palindrome`);
        } else {
            console.log(`${num} is not a palindrome`);
        }
        i++;
        };



### **Q-31**    Write a JavaScript Program to display the current day and time in the following format.Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

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


### **Q-32**    Write a JavaScript program to get the current date? 

**ANS**

    let currentDate = new Date().getDate()
        console.log(currentDate);


### **Q-33**    Write a JavaScript program to compare two objects?

**ANS**

        function compareObjects(obj1, obj2) {
        if (typeof obj1 === 'object' && obj1 != null && typeof obj2 === 'object' && obj2 != null) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
        };

        for (let jay in obj1) {
        if (!obj2.hasOwnProperty(jay)) {
            return false;
        };
        if (!compareObjects(obj1[jay], obj2[jay])) {
            return false;
        };
        };
        return true;
        } else {
        return obj1 === obj2;
        };
        };

        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: 3 };
        const obj3 = { a: 1, b: 2, c: 4 };

        console.log(compareObjects(obj1, obj2)); // Output: true
        console.log(compareObjects(obj1, obj3)); // Output: false


### **Q-34**    Write a JavaScript program to convert an array of objects into CSV string?

**ANS**

            const objectToCsv = function (data) {
            
                const csvRows = [];
            
                const headers = Object.keys(data[0]);
            
                csvRows.push(headers.join(','));
            
                for (const row of data) {
                    const values = headers.map(header => {
                        const val = row[header]
                        return `"${val}"`;
                    });

                    csvRows.push(values.join(','));
                }
            
                return csvRows.join('\n');
            };
            
            const data = [{
                "firstname": "Jayesh",
                "city": "veraval",
                "age": 30
            },
            {
                "firstname": "Bhavesh",
                "city": "somanath",
                "age": 36
            },
            {
                "firstname": "Dhiraj",
                "city": "Gunvantpur",
                "age": 28
            },
            ];
            
            const csvData = objectToCsv(data);
            console.log(csvData); 


### **Q-35**    Write a JavaScript program to capitalize first letter of a string?

**ANS**

    let myString = 'jayesh';

        let upperJayesh = myString[0].toUpperCase();
        console.log(upperJayesh)

        let sliceJayesh = myString.slice(1, myString.length);
        console.log(sliceJayesh);

        let resultedName = upperJayesh + sliceJayesh;
        console.log(resultedName);


### **Q-36**    Write a JavaScript program to determine if a variable is array?

**ANS**

    In array types of .push(), .pop(), .shift(), .unshift(), .join(), .slice(), .splice(), .lenth() in used to javascript.

    function isArray(variable) {
                return Array.isArray(variable)
            };

            let arr = [1, 2, 3];
            let notArr = "This is not an array";

            console.log(isArray(arr));    True
            console.log(isArray(notArr)); false



### **Q-37**    Write a JavaScript program to clone an array? 

**ANS**

    let cloneArray = [1, 2, 3, 4, 5];

        let clone = cloneArray.slice();

        console.log(clone);

        Output = [1,2,3,4,5]



### **Q-38**    What is the drawback of declaring methods directly in JavaScript objects? 

**ANS**

    let myObject = {
        try() {
            console.log("front end");
        }
    };

    const obj1 = Object.create(myObject);
    const obj2 = Object.create(myObject);

    console.log(obj1.method === obj2.method);  True


### **Q-39**    Print the length of the string on the browser console using console.log()? 

**ANS**

    let str = "bro  w e ser  u si ng 1 fr ont e nd";
    console.log(str.length);

    Output = 35


### **Q-40**    Change all the string characters to capital letters using toUpperCase() method? 

**ANS**

    let main = 'jayesh mer'
            let toUpperCase = main.toUpperCase();
            console.log(toUpperCase);


### **Q-41**    What is the drawback of declaring methods directly in JavaScript objects?

**ANS**

    let myObject = {
        try() {
            console.log("devloper");
        }
    };

    const obj1 = Object.create(myObject);
    const obj2 = Object.create(myObject);

    console.log(obj1.method === obj2.method);  True


### **Q-42**    Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

**ANS**

    let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let year = new Date().getFullYear();

        console.log(`${month}/${day}/${year}`);



        let month2 = new Date().getMonth() + 1;
        let day2 = new Date().getDate();
        let year2 = new Date().getFullYear();

        console.log(`${day}/${month}/${year}`);


### **Q-43**    Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?

**ANS**

    let str = "30 Days Of JavaScript";
    let position = str.indexOf("a");

    console.log(position);  Output= 4


### **Q-44**    Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript? 

**ANS**

    let str = "30 Days Of JavaScript";
    let position = str.lastIndexOf("a");

    console.log(position);  Output= 17


### **Q-45**    Form Validtion in JS? 

**ANS**

    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main-f {
            width: 30%;
        }

        #number,
        #email,
        #password {
            width: 100%;
        }
    </style>
    </head>
    <body>
    <div class="main-f">
        <form action="">
            <label for="">phone</label>
            <div class="phone">
                <input type="number" id="number" placeholder="number">
            </div>
            <label for="">Email</label>
            <div class="email">
                <input type="email" id="email" placeholder="email">
            </div>
            <label for="">password</label>
            <div class="password">
                <input type="password" id="password" placeholder="password">
           </div>  
           <div class="button">
                <input type="submit" id="button" value="Send Me">
            </div>
        </form>
    </div>

    </script>
        <!-- === phoneNumber Validation  ===  -->

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

         <!-- =====  password validation ===== -->


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
    </body>
    </html>


### **Q-46**    Form in Email, number, Password, Validation?

**ANS**

    </head>
    <body>
    <div class="main-f">
        <form action="">
            <label for="">phone</label>
            <div class="phone">
                <input type="number" id="number" placeholder="number">
            </div>
            <label for="">Email</label>
            <div class="email">
                <input type="email" id="email" placeholder="email">
            </div>
            <label for="">password</label>
            <div class="password">
               <input type="password" id="password" placeholder="password">
            </div>  
            <div class="button">
                <input type="submit" id="button" value="Send Me">
            </div>
        </form>
    </div>

    </script>
       <!-- ==== phoneNumber Validation  ====  -->

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


### **Q-47**    Dynamic Form Validation in JS?

**ANS**

    <!DOCTYPE html>
    <html>
    <head>
        <title>Dynamic Form Validation</title>
        <style>
            .error {
                color: red;
            }
        </style>
    </head>
    <body>
        <form id="myForm" onsubmit="return validateForm()">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><span id="nameError" class="error"></span><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><span id="emailError" class="error"></span><br><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age"><span id="ageError" class="error"></span><br><br>
            <input type="submit" value="Submit">
        </form>

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
    </body>
    </html>


### **Q-48**    how many type of JS Event? How to use it ?

**ANS**

    Event list
    => click
    => mouseover
    => mouseleave
    => keypress
    => keypdown
    => focus

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div class="box">This is some random text</div>
        <button>Submit</button>`
    <script>
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
    </body>
    </html>



### **Q-49**    What is Bom vs Dom in JS?

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
   

### **Q-50**    Array vs object defences in JS?

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



### **Q-51**    Split the string into an array using split() Method?

**ANS**

    let string = "mengo,greps,pinepal";
    let array = string.split(",");
    console.log(array);


### **Q-52**    Check if the string contains a word Script using includes() method?

**ANS**

    let str = "JavaScript is a scripting language";
    let word = "Script";

    if (str.includes(word)) {
        console.log("The string contains the word 'Script'");
    } else {
        console.log("The string does not contain the word 'Script'");
    };

    Output = The string contains the word 'Script'


### **Q-53**    Change all the string characters to lowercase letters using toLowerCase() Method.

**ANS**

        let characters = 'MY NAME IS MER JAYESH';
        let Change = characters.toLowerCase();
        console.log(Change)


### **Q-54**    What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.

**ANS** 

        let str = '30 Days of JavaScript';
        let char = str.charAt(15);
        console.log(char);

        Output = S


### **Q-55**    copy to one string to another string in JS?

**ANS**

        const originalString = 'I am Web development Engineer ';
        let copiedString = originalString;
        console.log(copiedString);