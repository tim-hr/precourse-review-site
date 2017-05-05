const tableBodyEl = document.querySelector('TABLE TBODY');
const delFirstRowEl = document.getElementById("btn-nuke-first-row");

delFirstRowEl.addEventListener('click', function(event) {
	tableBodyEl.removeChild(document.querySelector('TBODY TR'));
});