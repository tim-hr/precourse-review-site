
const cyclePoniesButton = document.querySelector("#btn-cycle-ponies");

const swapPonies = function() {
    const imageDivs = document.querySelectorAll(".my-little-pony");
    let firstImageTag = imageDivs[0].getElementsByTagName('img')[0];
    let firstImageNameDiv = imageDivs[0].firstElementChild;

    let secondImageTag = imageDivs[1].getElementsByTagName('img')[0];
    let secondImageNameDiv = imageDivs[1].firstElementChild;

    let tempImageTag = firstImageTag.src;    
    let tempImageName = firstImageNameDiv.textContent;

    firstImageTag.src = secondImageTag.src;
    secondImageTag.src = tempImageTag;
   
    firstImageNameDiv.textContent = secondImageNameDiv.textContent;
    secondImageNameDiv.textContent = tempImageName;

};

cyclePoniesButton.addEventListener("click", swapPonies);




