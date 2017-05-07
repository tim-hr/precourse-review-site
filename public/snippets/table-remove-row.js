const nukeButton = document.querySelector('#btn-nuke-first-row');

nukeButton.addEventListener('click', nukeFirstRow);

function nukeFirstRow() {
	console.log('help');
	document.querySelector('.data-table tbody tr').remove();
}