document.addEventListener("keypress", handleStart, { once: true });
const title = document.querySelector("[data-title]");

let lastTime;

updateLoop = (time) => {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(updateLoop);
        return;
    }

    window.requestAnimationFrame(updateLoop);
    lastTime = time;

    const delta = time - lastTime;
}

// start game
handleStart = () => {
    title.classList.add("hide");
    window.requestAnimationFrame(updateLoop);
};

// end game
handleLose = () => {

}