document.getElementById("btn-cycle-ponies").onclick = function() {

	document.getElementsByClassName("wrapper")[0].insertBefore(document.getElementsByClassName("my-little-pony")[1], document.getElementsByClassName("my-little-pony")[0]);
};

