const cyclePoniesEl = document.querySelectorAll('.my-little-pony');
cyclePoniesEl.addEventListener('click', function() {
    for(let i = 0; i < cyclePoniesEl.length; i++){
      let current = cyclePoniesEl[i];
      let next = cyclePoniesEl[i + 1];
      
      current = next;
    }
});