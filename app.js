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

// Task 4

/*
var ticketPrice=600;
document.write("Cost of 5 Movie Ticket is "+ticketPrice*5); 

*/

// Task 5

/*

var table=prompt("Enter a number to display the table");
var len=prompt("Enter the length")
for(i=1;i<=len;i++){
    document.write(table+" x "+i+" = "+table*i,"<br>")
}

*/


//Task 6

/*
var celicus = prompt("Enter a Temperature in celcius");
var FahrenHeit = celicus*9/5+32
document.write(celicus+"C "+" IS Equal to "+FahrenHeit+"F")

var FahrenHeit=prompt("Enter a Tempearure in FahrenHeit");
var celcius=(FahrenHeit-32)*5/9;
document.write(celcius)

*/

// Task 7

/*
var item1=650
var item2=100
var quantity1=3
var quantity2=7
var shipCharge=100
var item1Total=item1*quantity1
var item2Total=item2*quantity2

document.write("Price of item1 is "+item1+"<br>")
document.write("Quantity of item1 is "+quantity1+"<br>")
document.write("Price of item2 is "+item2+"<br>")
document.write("Quantity of item2 is "+quantity2+"<br>")
document.write("Total cost is ",item1Total+item2Total+shipCharge)

*/

// Task 8

/*
document.write("<h1>"+"MARKSHEET"+"</h1>","<br>")
var totalMarks=980;
var obtainMarks=804
var percentage=obtainMarks/totalMarks*100
document.write("Total marks is ",totalMarks+"<br>");
document.write("Obtain marks is ",obtainMarks+"<br>");
document.write("Percentage is ",percentage+"<br>");

*/

// Task 9

/*
var dollar = 163.50;
var saudi = 43.58;
document.write("Total Currency in PKR :",(dollar*10)+(saudi*25))
*/

// Task 10

/*
var a = 10;
document.write(a+5*10/2);

*/


// Task 11

/*

document.write("<h1>"+"Age Calculator"+"</h1>"+"<br>");
var currentYear=2020;
var birthYear=1998;
document.write("Current Year is ",currentYear+"<br>");
document.write("Birth Year is ",birthYear+"<br>");
document.write("Your Age is  ",currentYear-birthYear+"<br>");


*/


// Task12

/*

document.write("<h1>"+"The Geometrizer"+"</h1>"+"<br>");
var radius=20;
document.write("The Radius of circle is ",radius+"<br>");
var circumference=2*3.14*20;
var area = 3.14*radius*radius
document.write("The Circumference is ",circumference+"<br>");
document.write("The Area is ",area+"<br>");
*/

// TASK 13

/*
document.write("<h1>"+"The LifeTime Supply Calculator"+"</h1>"+"<br>");
var snacks = "Rite";
var age = 15;
var maxage = 65;
var snacksPerDay=3;
document.write("Favourite snack is ",snacks+"<br>");
document.write("Current age is ",age+"<br>");
document.write("Estimated Max Age ",maxage+"<br>");
document.write("Amount of snacks perday is ",snacksPerDay+"<br>");
document.write("you will need "+(maxage-age)*snacksPerDay," Choclate chip to last you until the rip old age of "+maxage);

*/