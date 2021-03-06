/*
 * index.js
 * Root namespace javascript
*/

/* jslint           browser : true,   continue : true,
   devel  : true,    indent : 2,       maxerr  : 50,
   newcap : true,     nomen : true,   plusplus : true,
   regexp : true,    sloppy : true,       vars : false,
   white  : true
*/
/* global $, spa */

spa.shell = (function (){
  var
    initModule;

  initModule = function ($container) {
    console.log($container);
  };

  return { initModule : initModule };  
})();
