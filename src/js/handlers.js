import {  gridRender } from './grid';

export function handleHover(elements) {
  let cells = elements.querySelectorAll(".grid__cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (events) => {
      cell.style.background = "#cff2bd";
    });
  });
}

export function elementsInit() {
    return {
        gridContainer: document.querySelector(".grid__container"),
        promptButton: document.querySelector(".prompt__button")
    }
}

export function handleInit() {
  let elements = elementsInit()
  gridRender(undefined,elements.gridContainer)
  handleHover(elements.gridContainer)
  // gridInit(elements.gridContainer);
}

export function handlePrompt() {
  let elements = elementsInit()
  let size = prompt("Please enter size of grid: ")
  gridRender(size, elements.gridContainer) 
  handleHover(elements.gridContainer)
}
