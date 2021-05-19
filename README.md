## Javascript Fundamentals
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" width="300px" height="300px">

Javascript is an interpreted language, objects oriented, weakly typed, and dynamic.

### Weakly Typed

The data types are not well defined in the language and allow for example operations between numbers and letters because the language assumes data types that are not necessarily the ones you want to represent.
You can do operations between different data types (integers with Strings, Booleans with integers, etc.).

<img src="https://blogs.agilefaqs.com/wp-content/uploads/2009/09/strongweakstaticdynamic_type.png" width="440px" height="300px">

Example:

```javascript
4 + “7”  // 47 string
4 * ”5”  // 20 number
3 + true  // 4 number
False - 5  // -5 number
```

### Dynamic Typing

Run directly in the Runtime stage without a previous compilation stage. This allows you to try our code immediately, But it is also what makes errors show until the program is executed.

Example;

```javascript
var name = "Leonel";
name = 22;
```

### JavaScript is Backwards Compatible

All new functions that depart from JavaScript will not damage the work already done, but can not be used in our work environment immediately. To solve this is Babel that allows us to use the new language features and transforms them into a version that the browser can understand.

### Variables

```javascript
let myVariable;  // declaring the variable
myVariable = “Hello”  // Initializing the variable
let myName = “Leonel”  // Declaring and Initializing the variable
```

