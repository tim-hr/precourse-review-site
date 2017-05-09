var pony1 = document.getElementsByClassName('my-little-pony')[0];
var pony2 = document.getElementsByClassName('my-little-pony')[1];
var button = document.getElementById('btn-cycle-ponies');

button.onclick = function (){
	let container = [];
	container.push(pony1.children[1].src);
	container.push(pony2.children[1].src);
	pony1.children[1].src = container[1];
	pony2.children[1].src = container[0];
}

// I made this under the assumption that ONLY the images
// were to be swapped.