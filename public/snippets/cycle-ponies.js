
class ViewManager2 {

  connectEventHandlers() {
    document.getElementById("btn-cycle-ponies")
            .addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    let allImage = document.querySelectorAll('.my-little-pony img');
    let allText = document.querySelectorAll('.my-little-pony div');
    let div1 = allText[0];
    let div2 = allText[1];
    let divText1 = div1.textContent;
    let divText2 = div2.textContent;
    let src1 = allImage[0].getAttribute('src');
    let src2 = allImage[1].getAttribute('src');
    let firstTarget = document.getElementsByClassName('my-little-pony')[0];
    let secondTarget = document.getElementsByClassName('my-little-pony')[1];
    div2.innerHTML = divText1;
    allImage[0].src = src2;
    div1.innerHTML = divText2;
    allImage[1].src = src1;
  }
}

const viewManager2 = new ViewManager2();
viewManager2.connectEventHandlers();