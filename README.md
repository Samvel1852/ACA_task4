# Type Coercion in Javascript
## Introduction
Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6).

As an example of type coercion in practice, look at the JavaScript Comparison Table, which shows how the loose equality == operator behaves for different a and b types. This matrix looks scary due to implicit type coercion that == operator does, and it’s hardly possible to remember all those combinations. And you don’t have to do that — just learn the underlying type coercion principles.

## Type Coercion types
There is two types of type coercion in javascript:

- [implicit](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/#:~:text=Type%20coercion%20is%20the%20process,Symbol%20(added%20in%20ES6).)
- [explicit](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/#:~:text=Type%20coercion%20is%20the%20process,Symbol%20(added%20in%20ES6).)

The implicit type coercion is when the programming language changes the type not directly changed by programmer.

The explicit type coercion is when the programmer changes the types directly.

If you want to learn more about the differences between this two coercion types please click on the list words above: implicit, explicit.
## parseInt and parseFloat functions 

These two are both functions in Javascript which get string and pase it to number with different way.

### parseFloat

The parseFloat() function parses a string and returns a floating point number.

This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseFloat() returns NaN.

**For example**

```javascript
parseFloat("123.54.78")
```
This will output 123.54.
You can learn more about parseFloat [Here](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).

### parseInt

The parseInt() function parses a string and returns an integer.

The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)
Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseInt() returns NaN.

Note: Older browsers will result parseInt("010") as 8, because older versions of ECMAScript, (older than ECMAScript 5, uses the octal radix (8) as default when the string begins with "0". As of ECMAScript 5, the default is the decimal radix (10).

**For example**

```javascript
parseInt("123.54.32")
```
This will output 123.
You can learn more about parseFloat [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

## Type Coercion by arithmetic operators

The types in Javascript are getting changed by arithmetic operators too. For the + operator the priority is on string for the others: -, *, / the priority is on number.
You can learn more about them [Here](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).

If you want to learn good programming follow [Vrezh Oganisyan](https://oganisyan.com/).