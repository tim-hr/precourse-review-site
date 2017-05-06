const bodyEl = document.querySelector('tbody');
const buttonOfDestruction = document.querySelector('#btn-nuke-first-row');

buttonOfDestruction.addEventListener('click', () => {
  if (bodyEl.firstElementChild) {
    bodyEl.removeChild(bodyEl.firstElementChild);
  }
});
