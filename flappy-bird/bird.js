const birdElement = document.querySelector("[data-bird]");
const BIRD_SPEED = 5;

export function updateBird(delta) {
    setTop(getTop() + BIRD_SPEED);

    console.log(getTop());
}

function getTop(top) {
    birdElement.style.setProperty("--bird-top", top);
}

function setTop() {
    return parseFloat(getComputedStyle(birdElement).getPropertyValue("--bird-top"));
}