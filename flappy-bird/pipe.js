const HOLE_HEIGHT = 120;

function createPipe() {
  const pipeElement = document.createElement("div");
  const topElement = createPipeSegment("top");
  const bottomElement = createPipeSegment("bottom");
  pipeElement.append(topElement);
  pipeElement.append(bottomElement);
  pipeElement.classList.add("pipe");
  pipeElement.style.setProperty(
    "--hole-top",
    randomNumberBetween(
      HOLE_HEIGHT * 1.5,
      window.innerHeight - HOLE_HEIGHT * 0.5
    )
  );

  const pipe = {
    get left() {
      return parseFloat(
        getComputedStyle(pipeElem).getPropertyValue("--pipe-left")
      );
    },
    set left(value) {
      pipeElem.style.setProperty("--pipe-left", value);
    },
    remove() {
      pipes = pipes.filter((p) => p !== pipe);
      pipeElem.remove();
    },
    rects() {
      return [
        topElem.getBoundingClientRect(),
        bottomElem.getBoundingClientRect(),
      ];
    },
  };
  pipe.left = window.innerWidth;
  document.body.append(pipeElem);
  pipes.push(pipe);
}

function createPipeSegment(position) {
  const segment = document.createElement("div");
  segment.classList.add("segment", position);
  return segment;
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
