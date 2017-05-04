initDomPonies = function() {
    var ponies = document.querySelectorAll('.my-little-pony');
    const swapPonyButton = document.querySelector('#btn-cycle-ponies');
    
    attachEventHandlers = function() {
        swapPonyButton.addEventListener('click', swapPonies);
    }
   
    swapPonies = function() {
        ponies[0].before(ponies[1]);
        ponies = document.querySelectorAll('.my-little-pony');
    }
}

initDomPonies();
attachEventHandlers();