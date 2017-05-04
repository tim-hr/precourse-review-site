const name = 'Gideon Baik ';
const introText = `Hi! I'm ${name}. Welcome to my review site!`;

const introDiv = document.querySelector('#self-intro');
introDiv.textContent = introText;
introDiv.style.visibility = 'visible';