

'use strict';
(function() {
    window.addEventListener('load', init);

async    function init() {
        
async function sayHelloAsync(name) {
return "Hello " + name;
}
  
console.log(sayHelloAsync("dubs")); // Promise <pending>
let message = await sayHelloAsync("dubs");
console.log(message); // "Hello dubs"



    }

    /** ---- Helper Functions  ---- */

    function gen(tagName) {
      return document.createElement(tagName);
    }

    function id(idName) {
      return document.getElementById(idName);
    }

    function qs(selector) {
      return document.querySelector(selector);
    }

    function qsa(selector) {
      return document.querySelectorAll(selector);
    }
})();








    



