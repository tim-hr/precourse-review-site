
const btn1 = document.querySelector("#btn-cycle-ponies");
btn1.addEventListener("click", function(){
  const pic = document.querySelectorAll(".my-little-pony");
  var temp = pic[0];
  pic[0]=pic[1];
  pic[1]=temp;
});

