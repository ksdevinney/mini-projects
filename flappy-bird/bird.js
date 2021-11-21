const birdElement = document.querySelector("[data-bird]");

export function updateBird(delta) {
    console.log(getTop());
}

function getTop(top) {
    birdElement.style.setProperty("--bird-top", top);
}

function setTop() {
    return getComputedStyle(birdElement).getPropertyValue("--bird-top");
}