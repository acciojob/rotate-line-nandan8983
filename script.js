//your JS code here. If required.
let angle = 0;

function rotateLine() {
  angle += 2;
  const line = document.getElementById('line');
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

setInterval(rotateLine, 20);