
//I didn't really know how to do this... So I basically googled for 45 minutes 
//and made this janky mess. Hopefully it will at least give you a good idea
//of where I am when it comes to manipulating DOM

function cyclePonies() {

  const topPony = document.getElementsByTagName("img")[0];
  const bottomPony = document.getElementsByTagName("img")[1];
  const topPonySrc = topPony.src
  const bottomPonySrc = bottomPony.src

  const topPonyName = document.getElementsByClassName("my-little-pony")[0].childNodes[1].innerHTML;
  const bottomPonyName = document.getElementsByClassName("my-little-pony")[1].childNodes[1].innerHTML;

  document.getElementsByClassName("my-little-pony")[0].childNodes[1].innerHTML = bottomPonyName;
  document.getElementsByClassName("my-little-pony")[1].childNodes[1].innerHTML = topPonyName;


  topPony.src = bottomPonySrc;
  bottomPony.src = topPonySrc;
} 
