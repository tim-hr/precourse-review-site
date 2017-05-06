function rotatePonies() {
  const ponies = document.querySelectorAll('.my-little-pony');

  const pony1Name = ponies[0].textContent;
  const pony2Name = ponies[1].textContent;
  const pony1Image = ponies[0].childNodes[3].attributes[0].nodeValue;
  const pony2Image = ponies[1].childNodes[3].attributes[0].nodeValue;

  ponies[0].childNodes[3].attributes[0].nodeValue = pony2Image;
  ponies[1].childNodes[3].attributes[0].nodeValue = pony1Image;
  ponies[0].childNodes[1].childNodes[0].data = pony2Name;
  ponies[1].childNodes[1].childNodes[0].data = pony1Name;
}

document.getElementById('btn-cycle-ponies').addEventListener('click', this.rotatePonies.bind(this));
