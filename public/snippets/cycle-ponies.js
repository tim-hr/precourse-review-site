document.getElementById('btn-cycle-ponies').addEventListener('click', function() {
  const ponies = document.querySelectorAll('.my-little-pony');
  const pony1 = ponies[0];
  const pony2 = ponies[1];

  const reference = document.querySelectorAll('H3')[1];
  reference.insertBefore(pony2, null);
  reference.insertBefore(pony1, null);
});
