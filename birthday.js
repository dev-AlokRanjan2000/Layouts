function playSurprise() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("I love you more than words can say 💖");
}

// Floating hearts animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);