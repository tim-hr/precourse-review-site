function swapPonies() {
    let wrapper;
    let first;
    let second;
    wrapper = document.querySelector('.wrapper')
    first = document.querySelectorAll('.my-little-pony')[1];
    second = document.querySelectorAll('.my-little-pony')[0];
    wrapper.insertBefore(first, second);
}

