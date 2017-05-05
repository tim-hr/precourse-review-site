// your code here
const btnNuke = document.getElementById('btn-nuke-first-row');

btnNuke.addEventListener('click', function(){
  const trs = document.querySelector('TBODY TR');

  trs.childNodes[3].innerHTML = '';
  trs.childNodes[5].innerHTML = '';
  trs.childNodes[7].innerHTML = '';
  
});