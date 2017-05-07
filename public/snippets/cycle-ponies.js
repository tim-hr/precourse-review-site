function swipePonies () {
  let ponies = document.getElementsByClassName('my-little-pony');
  let firstPony = ponies[0];
  let secondPony = ponies[1];
  [firstPony.innerHTML, secondPony.innerHTML] = [secondPony.innerHTML, firstPony.innerHTML] ;
}

document.getElementById('btn-cycle-ponies').addEventListener('click', this.swipePonies.bind(this));
