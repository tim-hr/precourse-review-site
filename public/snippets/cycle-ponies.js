const swapButton = document.querySelector('#btn-cycle-ponies');

swapButton.addEventListener('click', swapPonies);

function swapPonies() {
	const pony1 = document.querySelectorAll('.my-little-pony')[0];
	const pony2 = document.querySelectorAll('.my-little-pony')[1];
	const pony1HTML = pony1.innerHTML;
	
	pony1.innerHTML = pony2.innerHTML;
	pony2.innerHTML = pony1HTML;
}