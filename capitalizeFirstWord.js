'use strict';

//Capitalize the first letter in each word of the string.

var capitalize = function( string ){

  var out = '';

  for( var i = 0, len = string.length; i < len; i++){
    
    if( i === 0 ){

      out += string[i].toUpperCase();

    } else if( string[i] === ' ' ){

      out += string[i] + string[i+1].toUpperCase();
      i++;

    } else {

      out += string[i];

    }
  }

  return out;
};

var funkyString = capitalize('i am the very model of a modern major general');
