var i = 0;
var animateText = "Jonghyun Kang"; 
var speed = 150; 

function typeWriter() {
  if (i < animateText.length) {
    document.querySelector(".anime-txt").innerHTML += animateText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();