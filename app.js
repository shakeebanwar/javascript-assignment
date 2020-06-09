// chap #1

/*1.Write a script to greet your website visitor using JS alert
box.

alert('Helloworld')

*/



/* 2.Write a script to display following message on your web page:

alert('Error!Please Enter a Valid Password');

*/

/*
3. Write a script to display following message on your web
page: (Hint : Use line break)

alert('Welcome to JsLand..\nHappyCoding')


*/

/*4. Write a script to display following messages in sequence:

alert('Welcome to JsLand')
*/


/*5. Generate the following message through browser’s
developer console:

console.log("Hello...I can run Js through my webbrowser console")

*/


// Task 6

// alert('Sucessfully Login')


// Task 7

// (a) <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="app.js"></script>
// </head>
// <body>
    
// </body>
// </html>



// (B) <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
    
// </body>
// <script></script>
// </html>



// (C)<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>alert('Helloworld')</script>
    
// </head>
// <body>
    
// </body>
// </html>


// (D)<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
   
// </head>
// <body>
    
// </body>
// </html>

// <script>
//     alert('Hello')
// </script>






// chap 2

// Task 1

// var username="";

// Task2

// var myName="ShakeebAnwar";

// Task3

// a .var message = "";
// b .message="Hello World";
// c .alert(message);

// Task 4

/*var myName="shakeeb";
var age="21 year Old";
var course="Certified Mobile App Development";

alert(myName);
alert(age);
alert(course);

*/

// Task 5

/*
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza);
*/

// Task 6

/*
var email="shakeebanwar250@gmail.com";
alert("My Email Address is "+email);

*/

// Task 7

/*

var book = "A smart way to learn JavaScript";
alert("I am trying to Learn From the Book "+book);

*/

// Task 8

/*

var a = "Yah! I can write HTML content through  Javascript";
document.write(a);
*/

// Task 9

/*
var a = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(a);

*/


// Chap#3

// Task 1

/*
var age = 21
alert("I am "age+" old");
*/

// Task 2

/*
var n = localStorage.getItem('on_load_counter');
if(n===null){
    n=0;
}
n++;
localStorage.setItem("on_load_counter", n);
alert("You have visited this page "+n+" times");

*/

// Task 3

/*

var birthYear=1998
document.write("My Birth Year is "+birthYear+"<br>");
document.write("Data Type of my Birth Year is "+typeof(birthYear));
*/

// Task 4

/*

visitorName=prompt("Enter your Name");
producttitle=prompt("Enter the Product Name");
quantity=prompt("Enter your Quantity");
document.write("<b>"+visitorName+"</b>"+" ordered "+"<b>"+quantity+producttitle+"</b>"+" on XYZ Clothing Store")
*/


// chap#4

// Task 1

/*

var variable1 = "Hello World!", variable2 = "Testing...",variable3 = 42;

*/

// Task 2

// Ilegal variables
/*
var 2shakeeeb="";
var shak  eeb="";
var *shakeeeb="";
var ^shakeeb="";
var )shakeeb="";

*/


// Legal Variable
/*
var a="";
var $s="";
var _s=""
var shakeeb_Anwar="";
var shakeebAnwar="";

*/


// Task 3

/*
document.write("<h1>"+"Rules of Name JS Variables"+"</h1>"+"<br>")
document.write("Variable names can only contain numbers,$ and _ . For example $my_1stVariable"+"<br>")
document.write(" Variables must begin with a letter , $ or _ . For example $name, _name or name"+"<br>")
document.write("Variable names are case Sensitive"+"<br>")
document.write("Variable names should not be JS keywords"+"<br>")

*/



// chap 5

// Task 1
/*

var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a+b
document.write("Sum of "+a+" and "+b +" = "+c);

*/


// Task 2

/*
var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a-b
document.write("Sum of "+a+" and "+b +" = "+c);

var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a*b
document.write("Sum of "+a+" and "+b +" = "+c);


var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a/b
document.write("Sum of "+a+" and "+b +" = "+c);

*/



// Task 3

/*
var a;
document.write("Value After variable declartion is "+a+"<br>");
a=5;
document.write("Initial Value is "+a+"<br>");
a=a+1;
document.write("Value After Increment is : "+a+"<br>");
a=a+7
document.write("Value After Addition is : "+a+"<br>");
a=a-1;
document.write("Value After Decrement is : "+a+"<br>");
a=a%3;
document.write("The Remainder is : "+a+"<br>");

*/

// Task 5

/*
var ticketPrice=600;
document.write("Cost of 5 Movie Ticket is "+ticketPrice*5); 

*/

// Task 6

/*

var table=prompt("Enter a number to display the table");
var len=prompt("Enter the length")
for(i=1;i<=len;i++){
    document.write(table+" x "+i+" = "+table*i,"<br>")
}

*/