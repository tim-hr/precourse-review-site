const removeFirstRow = function () {
  const removeRowButton = document.querySelector('#btn-nuke-first-row');

  removeRowButton.addEventListener('click', function () {
    const parent = document.querySelector('.data-table TBODY');

    if (parent.children.length > 0) {
      parent.removeChild(parent.firstElementChild);
    }
  });
};

removeFirstRow();
