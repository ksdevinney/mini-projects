const HOLE_HEIGHT = 120;

export function getPipeRects() {
    return pipes.flatMap(pipe => pipe.rects())
  }

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
        getComputedStyle(pipeElement).getPropertyValue("--pipe-left")
      );
    },
    set left(value) {
      pipeElement.style.setProperty("--pipe-left", value);
    },
    remove() {
      pipes = pipes.filter((p) => p !== pipe);
      pipeElement.remove();
    },
    rects() {
      return [
        topElem.getBoundingClientRect(),
        bottomElem.getBoundingClientRect(),
      ];
    },
  };
  pipe.left = window.innerWidth;
  document.body.append(pipeElement);
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