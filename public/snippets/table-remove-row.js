const nukeFirstRowButton = document.querySelector("#btn-nuke-first-row");

const nukeRow = function() {
    const dataTableBodyEl = document.querySelector(".data-table tbody");
    if (dataTableBodyEl.childNodes[0].nextElementSibling) {
        dataTableBodyEl.deleteRow(0);
    }
};

nukeFirstRowButton.addEventListener("click", nukeRow);


