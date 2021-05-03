//1. Please try to guess, test, and then understand following examples:
Number("0x77") === 0x77; // true, because the Number() function will change the number if see 0x will change by hexadecimal system
// console.log(Number("0x77") === 0x77);
Number("077") === 077; //false, because the same function will convert 077 by the decimal system and will be 77 not equal to 077
// console.log(Number("077") === 077);
Number(" 12"); // will make 12, the space will skip
// console.log(Number(" 12"));
isNaN(" ") + ""; //"false", this will check and see that " " may be converted to number and result is 0
//and will return false then will attach with string and will give "false"
// console.log(isNaN(" ") + "");
0.1 + 0.2 == 0.3; //false, because it will not be equal, because of the precision lose in convert from binary
// to decimal
9007199254740992 + 1 == 9007199254740992; // true, will not sum
// console.log(2 ** 53 + 1); //will not sum in both cases because there is no bigger number from 9007199254740992 in
//javascript you can use bigInt in such cases
9007199254740992 + 2 == 9007199254740992; //false, will sum another numbers but javascript not guarantee for
//precision
// console.log(9007199254740992 + 7);
1 / "2"; //will result 0.5 the type will be number
// console.log(typeof (1 / "2"));
1 / 0; // infinity
// console.log(1 / 0);
1 / -0; //-infinity
// console.log(1 / -0);
Infinity / 6; //infinity
// console.log(Infinity / 6);
Infinity / -256; //-infinity
// console.log(Infinity / -256);
Infinity / Infinity; // NaN
// console.log(Infinity / Infinity); //cannot understand*****
0 / 0 + true + false + null + undefined; //NaN, because 0/0 is NaN and whatever sum to the NaN will be NaN
// console.log(0 / 0);//
parseInt(".2"); //NaN, don't read after point
// console.log(parseInt(".2"));
parseInt("077a"); //77, will read by the default radix which is decimal
parseInt("0x77a"); //1914, will convert the number from hexadecimal to decimal and will give 1914, when
// parceInt see 0x at the start it takes radix hexadecimal
// console.log(parseInt("0x77a"));
parseInt("I’m the best value - said Infinity."); //NaN, there is no number
// console.log(parseInt("I’m the best value - said Infinity."));
parseFloat("I’m the best value - said Infinity."); //NaN, don't read when starts with string
// console.log(parseFloat("22.9.sdefew"));
parseInt("Infinity is the best value!"); //NaN, reads infinity as string, first is string and not reads
// console.log(parseInt("Infinity is the best value!"));
parseFloat("Infinity is the best value!"); //infinity, reads infinity as infinity, tenca javascript-@))))))
// console.log(parseFloat("Infinity is the best value!"));
parseFloat("12.78ff"); //12.78, don't read string after point, parseFloat doesn't change thr system
//because of 0x, although parseInt does
// console.log(parseFloat("0x78ff"));
