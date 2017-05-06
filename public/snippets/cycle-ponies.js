// your code here
const btnSwap = document.getElementById('btn-cycle-ponies');

btnSwap.addEventListener('click', function(){
  const el = document.getElementsByTagName('img');

  let temp = el[0].src;

  el[0].src = el[1].src;

  el[1].src = temp;
});