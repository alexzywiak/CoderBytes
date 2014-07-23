'use strict';

// Add up the numbers from 1 to the given limit.  Return the sum.

var addUp = function( limit ){
  var sum = 0;

  for( var i = 0; i <= limit; i++){
    sum += i;
  }

  return sum;
};