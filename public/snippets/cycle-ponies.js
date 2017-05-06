
let swapBtn = document.getElementById('btn-cycle-ponies');

let num = 0;

swapBtn.addEventListener('click', function(){

    let store1 = document.getElementsByClassName('my-little-pony')[0].getElementsByTagName('img');
    let store2 = document.getElementsByClassName('my-little-pony')[1].getElementsByTagName('img');

    if (num%2 === 0){
    store1[0].src="http://i.imgur.com/obV6ULBm.png";
    store2[0].src="http://i.imgur.com/6PwBk7gm.png";
    } else {
    store1[0].src="http://i.imgur.com/6PwBk7gm.png";
    store2[0].src="http://i.imgur.com/obV6ULBm.png";
  }
  num++;
});
