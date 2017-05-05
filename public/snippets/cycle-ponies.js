const firstDivContent = document.getElementsByClassName("my-little-pony")[0].innerHTML;
const secondDivContent = document.getElementsByClassName("my-little-pony")[1].innerHTML;
const cyclePoniesEl = document.getElementById("btn-cycle-ponies");

cyclePoniesEl.addEventListener('click', function(event) {
	console.log('hi');
});