const birdElement = document.querySelector("[data-bird]");
const BIRD_SPEED = 0.5;

export function setUpBird() {
    setTop(window.innerHeight / 2)
}

export function updateBird(delta) {
    setTop(getTop() + BIRD_SPEED * delta);

    console.log(getTop());
}

function getTop(top) {
    birdElement.style.setProperty("--bird-top", top);
}

function setTop() {
    return parseFloat(getComputedStyle(birdElement).getPropertyValue("--bird-top"));
}