//basic math operation add, sub, div, mul.
// assignmnent mod(remainder) power(exponent) operation, concatenate strings, logarithm operation., circular operation, palindrome operation.
 // function name (){

// }

//add function

function add (x, y) {
    let addsum = x+y;
    return addsum;
}
let result = add(50, 100);

console.log(result);

// sub function 
function sub(i, j){
    let subtract= i-j;
    return subtract;
 }

  let result2 = sub(100, 50);
  console.log(result2);

// Div function
function div (a, b){
    let divide = a/b;
    return divide;
 }

    let result3 = div (100, 10);
    console.log(result3);

// Mul function
function mul(x, y){
    let multiply = x*y;
    return multiply;
 }

 let result4 = mul(30, 4);
console.log(result4);

// odd or even function
function odd(number){
   if (number % 2 == 0){
      return "Even";
   }  else{
     return "odd";
   }
}

  let result5 = odd(5);
console.log(result5); 

//power function

function power(base, exponent){
               // Math.pow(base, exponent);
   let result = base ** exponent;
   return result;
}

let result6 = power(2, 4);
console.log(result6);

// mod remainder function
function mod(a, b){
   let modRem = a % b
   return modRem
}

   let result7 = mod(8, 3);
   console.log(result7);

// exponential function
   function expo(a, b){
      let expoCalc = a ** b;
      return expoCalc;
   }

      let result8 =expo(3, 5);
      console.log(result8);

   
// concantenate strings
function string_Conc(a, b){
   let string_Conc = a+ b;
   return string_Conc;
}
   let result9 = string_Conc("chicken", "republic");
   console.log(result9);

// math Log2 function
function log(a, b){
    let log = a*b;
    return log;
 }

 let result10 = Math.log2(8);
console.log(result10);

// circumference function
function circum(r){
   const pi = 3.142
   let circumference = 2 * pi * r;
   return circumference;
}

   let result11 = circum(6);
   console.log(result11);


// palindrome function 
function palindrome (s) {
    s1 = s;
    return s1;
}

   let p = palindrome("gog");
   console.log(p);


   // Quadratic function 
 