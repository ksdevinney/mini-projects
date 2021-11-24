import { updateBird } from "./bird.js";

const title = document.querySelector("[data-title]");

document.addEventListener("keypress", handleStart(), { once: true });

let lastTime;

function updateLoop(time) {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(updateLoop);
        return;
    }
    const delta = time - lastTime;
    updateBird(delta);
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
};

// start game
function handleStart() {
    title.classList.add("hide");
    window.requestAnimationFrame(updateLoop);
};

// end game
// handleLose = () => {

// }