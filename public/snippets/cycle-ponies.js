// your code here

cyclePonies = function() {
  
  var page = document.querySelector('.wrapper')
  var top = document.querySelectorAll('.my-little-pony')[0];
  var bottom = document.querySelectorAll('.my-little-pony')[1];
  page.removeChild(bottom);
  page.insertBefore(bottom, top);

}

document.getElementById('btn-cycle-ponies').addEventListener('click', cyclePonies);