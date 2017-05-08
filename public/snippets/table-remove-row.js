const removeFirstRowEl = () => {
    let tableBody = document.querySelector('TBODY');
    tableBody.removeChild(tableBody.childNodes[0]);
}
document.getElementById('btn-nuke-first-row')
        .addEventListener("click", function () { removeFirstRowEl() } );