'use strict';

// Change each letter to the next letter in the alphabet.  Then capitalize each vowel.

var funkIt = function( str ){

  var funkyString = '';

  for( var i = 0, len = str.length; i < len; i++){

    if( str.toLowerCase().charCodeAt(i) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(i) <= 'z'.charCodeAt(0)){
      //If Consonant
      if( 'aeiou'.indexOf( str[i].toLowerCase() ) < 0 ){

        //If z
        if( 'z'.indexOf( str[i].toLowerCase() ) < 0){

          funkyString += String.fromCharCode( str.charCodeAt(i) + 1);

        } else {

          funkyString += String.fromCharCode( str.charCodeAt(i) - 25);

        }
      //If vowel
      } else {
        funkyString += str[i].toUpperCase();
      }
    } else {
      funkyString += str[i];
    }
  }

  return funkyString;

};

