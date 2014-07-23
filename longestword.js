'use strict';

// Given a string as an argument, return the longest word in the string.

var longestWord = function ( str ){

    var max = 0,
        longestWord = '',
        thisWord = '',
        count = 0;
    str = str + ' ';

    for( var i = 0, len = str.length; i < len; i++){
      
      if( str[i].toLowerCase().charCodeAt(0) >= 'a'.charCodeAt() && str[i].toLowerCase().charCodeAt(0) <= 'z'.charCodeAt() ){
        thisWord += str[i];
        count++;
      } else if ( str[i] === ' ' ) {

        if( count > max ){
          max = count;
          longestWord = thisWord;
        }
        thisWord = '';
        count = 0;
      }
    }
    return longestWord;
};
