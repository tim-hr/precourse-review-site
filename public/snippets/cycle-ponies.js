const ponies = document.getElementsByClassName("my-little-pony");

const swapInnerHTML= (twoParents) => {
    let firstParent = twoParents[0];
    let secondParent = twoParents[1];
    let firstHTML = firstParent.innerHTML;
    let secondHTML = secondParent.innerHTML;

    firstParent.innerHTML = secondHTML;
    secondParent.innerHTML = firstHTML;
}

document.getElementById('btn-cycle-ponies').addEventListener('click' , function () {swapInnerHTML(ponies)} )