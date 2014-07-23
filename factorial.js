'use strict';

// Return the factorial of a number.  4! = 4*3*2*1 = 24

function factorial(num){
  var fact = 1;
  for (var i = num; i > 0; i--) {
    fact *= i;
  };
  return fact;
}

debug(factorial(4));