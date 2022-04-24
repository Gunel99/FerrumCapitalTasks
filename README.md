1) Question 1: What are the various Data Types in JavaScript?

Answer:
In javascript, there are 7 data types: number, string, boolean, symbol, object, undefined, null. Type of NaN and Infinity are number. Type of null and array are object. But function is also a type in javascript, because type of function is function.

2) Question 2: What are Closures in JavaScript?

Answer:
In javascript, a closure is a function that references variables in the outer scope from its inner scope. So, we get variables in the outer scope and operate on them in the inner scope. It is called a closure.

3) Question 3: What are favorite features of HTML5?

Answer: 1) header, footer, main, artice, section, aside, nav tags - We was using them as class to build a layout of page in Html4. For ex: <div class="article">, <div class="header"> and so on. In Html5, we can already use them as tag.

    2) video, audio tags
    - We can place video and audio using the new elements in our project.

    3) progress tag
    - Using progress tag, we can show progress bar anywhere in the project.

    4) figure and figcaption tags
    - In Html5, it allows to use <figure> element to mark up a photo in the page, and <figcaption> element shows a caption of the photo.

    5) new types for input tags: email, range, number, tel, time, date, datetime-local, color and so on attributes
    - New types of input tag help us both adding data in a secure way and transfering data easily and conveniently.

    6) placeholder attribute
    - If we use placeholder of input, we can don't use from <label> element. It informs to the client that what data the input is waiting for.

    7) required attribute
    - It helps to collect all necessary information in the form. If any input element is required, so, it must be filled.

    7) canvas
    - Canvas is vector graphics. It can be usually used to draw graphics with different shapes and colors in javascript.

    8) regular expressions
    - Using the regular expressions, we can add the particular pattern as an input.
    For ex: [A-Za-z] {6,14}. It accepts both uppercase and lowercase letters, so, accepts minimum length of characters is 6 and maximum length of characters is 14.

    9) accessibility
    - It simplifies the use from website. The feature is designed originally for people with disabilities. For ex: visually impaired, low vision, color blind, blind and so on...

5) Question 5: What is Scope in JavaScript?

Answer:
Scope defines the accessibility of variables. In javascript, there are 3 types of scope:
block scope, global scope, function scope. Previously there were 2 scopes: global and function.
When 'let' and 'const' keywords begin to use with ES6, so, a block scope ocurred. I show more detail about the scope with codes.

6) Question 6: What is Content Security Policy?

Answer:
The HTTP Content-Security-Policy response header allows to admin controling resources that users is allowed to load for the application. It helps to protect against cross-site scripting attacks. - Fetch directives, Navigation directives, document directives, Reporting directives and so on... - Fetch directives: It controls places which resources may be loaded. - Navigation directives: It control the locations which users can submit a form. - Reporting directives: It control the content security policy (CSP) report only header.

    1) connect-src: It reduces urls which can be loaded using scripts.
    2) default-src: It uses for the other fetch directives.
    3) font-src: We keep information about downloaded font files using @font-face.
    4) frame-src: We can create nested browsing contexts using frame and iframe elements.
    5) img-src: It defines valid sources of images and favicons.
    6) media-src: It defines valid sources for loading media using audio and video elements in Html5.
    7) script-src: It defines valid sources for javascript.
    8) style-src: It defines valid sources for css.

7) Question 7: What is strict mode?

Answer:
Strict mode makes some changes in javascript: 1) It removes some silent errors and changes them to throw errors. 2) It fixes mistakes that make difficult for coding in javascript. 3) The code with strict mode can be sometimes faster than the code without strict mode.
If we want to use a strict mode in the javascript codes, we must use from "use strict" in the top line. I explain more detail about it with codes.

8) Question 8: What's the difference between defer and async?

Answer:
    The loading times of web applications is very important. If our website loads slowly, so, it can't be forward in google search, also any users don't want to wait for the loading website for a long time. That's why, there are 2 attributes that help to solve this problem in javascript. These are defer and async.

    - Async: When script is downloaded, it is relized and blocks the rendering until it finishes. 
    The application order of scripts is not known in advance, because, it depends on which them will be downloaded first. 

    For ex:
    script1.js
    script2.js
    script3.js  - This range may also change ->

    script2.js
    script1.js
    script3.js  - It can be so.

    - Defer: Finally, It will be downloaded asynchronously and in parallel with HTML parsing. But, its execution is delayed until the whole HTML document has been parsed. So, when executing it, if a lot of scripts are loaded in the same time, the order will be protected.


