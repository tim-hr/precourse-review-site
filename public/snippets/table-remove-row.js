 initDomReferences = function() {
     const firstRowElements = document.querySelectorAll('TBODY TR TD');
     const nukeButton = document.querySelector("#btn-nuke-first-row");
     //console.log(firstRowElements);
     attachEventHandlers = function() {
         nukeButton.addEventListener('click', emptyFirstRow);
     }

     emptyFirstRow = function() {
         for (i = 0; i < 3; i++) {
         	firstRowElements[i].textContent = "";
         }
     }
 }
 
 initDomReferences();
 attachEventHandlers();
