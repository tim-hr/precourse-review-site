document.getElementById('btn-cycle-ponies').addEventListener('click', function(e) {
  let images = document.querySelectorAll('.my-little-pony');
  images[1].parentNode.insertBefore(images[1], images[0]);
});
