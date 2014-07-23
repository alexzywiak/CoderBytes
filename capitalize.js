'use strict';

// Given a string and a list of letters, capitalize each instance of the listed letters within the string.

var capitalize = function( string, charList ){

  var out = '';

  for( var i = 0, len = string.length; i < len; i++){
    
    var nextChar = string[i];

    for( var j = 0; j < charList.length; j++ ){
      
      if( string[i] === charList[j] ){

        nextChar = string[i].toUpperCase();

      }
    }

    out += nextChar;
  }

  return out;
};

var funkyString = capitalize('I am the very model of a modern major general', ['a', 'e', 'm'] );
