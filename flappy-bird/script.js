import { updateBird, setUpBird, getBirdRect } from "./bird.js";

const title = document.querySelector("[data-title]");
const subtitle = document.querySelector("[data-subtitle]");

document.addEventListener("keypress", handleStart, { once: true });

let lastTime;

function updateLoop(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  const delta = time - lastTime;
  updateBird(delta);
  if (checkLose()) {
    return handleLose();
  }
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}

function checkLose() {
  const birdRect = getBirdRect();

  const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight;

  return outsideWorld;
}

// start game
function handleStart() {
  title.classList.add("hide");
  setUpBird();
  lastTime = null;
  window.requestAnimationFrame(updateLoop);
}

// end game
// handleLose
function handleLose() {
  setTimeout(() => {
    title.classList.remove("hide");
    subtitle.classList.remove("hide");
    // subtitle.textContent = "0 pipes cleared"
    document.addEventListener("keypress", handleStart, { once: true });
  }, 100);
}
