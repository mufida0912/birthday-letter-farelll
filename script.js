let currentPanel = 1;

function showPanel(num) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.getElementById("panel" + num).classList.add("active");
  currentPanel = num;
}

function nextPanel() {
  showPanel(currentPanel + 1);
}

function prevPanel() {
  showPanel(currentPanel - 1);
}

function openLetter() {
  showPanel(6);
}

function noThanks() {
  alert("ckp tw.kenapa ngga mau buka?hmphh ngambek ahhhh..ulangiiii");
  showPanel(5);
}

function backToLetterIntro() {
  showPanel(4);  // balik ke panel "i wrote a letter for u"
}

/* EMOJI SPAWN (DI BELAKANG) */
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = "💙✮⊹";
  emoji.style.left = Math.random() * (window.innerWidth - 50) + "px";
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}, 500);
