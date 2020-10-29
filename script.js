var i = 0;
var animateText = "Jonghyun Kang"; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < animateText.length) {
    document.querySelector(".anime-txt").innerHTML += animateText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();