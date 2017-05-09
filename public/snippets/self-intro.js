const name = '{ TODO: your name here... look at the source code of this website and figure out how to edit this }'
const introText = `Hi! I'm ${name}. Welcome to my review site!`;

const introDiv = document.querySelector('#self-intro');
introDiv.textContent = introText;
introDiv.style.visibility = 'visible';