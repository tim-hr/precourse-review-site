// your code here
document.getElementById("btn-cycle-ponies").addEventListener("click", function(){

  let ponies = document.querySelectorAll(".my-little-pony");
  let ponie0 = ponies[0];
  let ponie1 = ponies[1];
  let tempHolder = ponie0;
  ponie1.parentNode.replaceChild(ponie0,ponie1);
  //document.querySelectorAll(".my-little-pony")[1].innerHTML = tempHolder;
  //stuck here, I am don't know replaceChild, does not work. 
});
