//* What will be the result and why?
"" + 1 + 0; //result is 10; because while we are use + operator the priority is on the string and here
//it serves to attach

"" - 1 + 0; // -1; In spite of + operator the rest arithmetic operator's priority is number and they try to
//change the value and type to number if possible. Here empty string converted to 0, so the result is -1.

true + false; // 1; Here there is not string so + operator tries to convert to number, so true is 1 and
//false is 0. so the rest is 1.

6 / "3"; //2; As we mentioned above here tries to convert all the parameters to the number so 6/3 is 2.

"2" * "3"; //6; with the same logic this is equal to 6.

4 + 5 + "px"; //9px; The + operator starts to attach elements after the first string, after the first string
//the type of expression changes to string, the result of it all resume to attach to each other, but at this
//example 4 + 5 sum before type convert so it will be 9 and then will attach "px" so 9px.

"$" + 4 + 5; //$45; this can be explained with the previous logic.

"4" - 2; //2; As we mentioned above the arithmetic operators -, *, / try to change types to number, so
//the result is 2.

"4px" - 2; //NaN; Here the - operator cannot change the "4px" to a number and the arithmetic action with
//it gives us NaN.

7 / 0; //infinity; The division of any positive number by 0 will result infinity.
" -9 " + 5; // -9 5; will be attached as strings so -9 5 between them will be space because this reads
// as string.

" -9 " - 5; //-14; Will change the type of first element to number and the result will be -14.

null + 1; //1; There is no any string here so the operator will change the type of null to number which value
//is 0.
undefined + 1; //NaN; cannot change the type of undefined to number and the result is NaN.
