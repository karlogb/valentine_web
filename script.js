function moveRandomEl(elm, speedFactor) {
  elm.style.position = "absolute";
  elm.style.top = Math.max(5, Math.random() * (90 - speedFactor)) + "%";
  elm.style.left = Math.max(5, Math.random() * (90 - speedFactor)) + "%";
}

const moveRandom = document.querySelector("#move-random");
let escapeCount = 0;
let buttonSize = 1.0;

function handleMouseEnter(e) {
  if (escapeCount < 5) {
    escapeCount++;
    moveRandomEl(e.target, escapeCount * 10);
    buttonSize *= 0.85;
    moveRandom.style.transform = `scale(${buttonSize})`;
  } else {
    moveRandom.textContent = "Áno";
    moveRandom.style.background = "linear-gradient(135deg, #E6A4B4, #D27D7D)";
    moveRandom.style.color = "white";
    moveRandom.style.cursor = "pointer";
    moveRandom.style.position = "static";
    moveRandom.style.animation = "shake 0.5s ease-in-out";
    moveRandom.style.transform = "scale(1)";

    moveRandom.removeEventListener("mouseenter", handleMouseEnter);
    moveRandom.addEventListener("click", function () {
      window.location.href = "yes.html";
    });
  }
}

moveRandom.addEventListener("mouseenter", handleMouseEnter);

window.onload = () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;
  }, 200);
};
