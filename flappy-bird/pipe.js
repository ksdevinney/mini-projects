function createPipe() {
    const pipeElement = document.createElement("div");
    const topElement = createPipeSegment("top");
    const bottomElement = createPipeSegment("bottom");
}

function createPipeSegment(position) {
    const segment = document.createElement("div");
    segment.classList.add("segment", position);
    return segment;
}