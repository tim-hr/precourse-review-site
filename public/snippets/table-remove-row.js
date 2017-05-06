// your code here

let EliminateBtn = document.getElementById('btn-nuke-first-row');
let clickCount = 1;

EliminateBtn.addEventListener('click', function(){
 let row = document.getElementsByTagName('td');
 for (var i = 0; i < 3*clickCount; i++){
   row[i].innerHTML = '';
 };
clickCount++;
});
