const greenify = function (el) {
  el.setAttribute('style', 'background-color: green');
};

let elements = document.getElementsByTagName("th");
for (let i = 0; i < elements.length; i ++) {
  greenify(elements[i]);
}
