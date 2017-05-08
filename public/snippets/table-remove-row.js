
const removeFirstChild = function(parentEl) {
  if (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
};

const onSubmit = function(event) {
  const firstRow = document.querySelector('TBODY');
  removeFirstChild(firstRow);
  removeFirstChild(firstRow);
}

const EventListener = function(query, behavior) {
  document.querySelector(query)
  .addEventListener('click', behavior);
}

EventListener('#btn-nuke-first-row', onSubmit);