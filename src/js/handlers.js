import {  gridRender } from './grid';

export function handleHover(elements) {
  let cells = elements.querySelectorAll(".grid__cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (events) => {
      cell.style.background = "#adadad";
    });
  });
}

export function elementsInit() {
    return {
        gridContainer: document.querySelector(".grid__container"),
        promptButton: document.querySelector(".prompt__button"),
        popOver: document.querySelector('#mypopover'),
        inputSize: document.querySelector("#input__size"),
        submitBtn: document.querySelector(".submit__btn"),
        errorSpan: document.querySelector(".error__size-span")
    }
}

export function handleInit() {
  let elements = elementsInit();
  gridRender(undefined,elements.gridContainer)
  handleHover(elements.gridContainer)
  // gridInit(elements.gridContainer);
}

export function validateInput(size) {
  let elements = elementsInit();
  if (!size || isNaN(size)) {
    elements.inputSize.style.border = "1px solid #ff7575";
    elements.errorSpan.textContent = "Please input a valid number";
    return false;
  }
  if(size >= 100 || size <= 0) {
    elements.inputSize.style.border = "1px solid #ff7575" 
    elements.errorSpan.textContent = "Please input value below 100 or greater than 0"
    return false;
  }
  return true;
}

export function clearInputs() {
  let elements = elementsInit();
  elements.inputSize.style.border = "none"
  elements.inputSize.value = "" 
  elements.errorSpan.textContent = ""
}

export function handlePrompt() {
  let elements = elementsInit()
  let size = elements.inputSize.value;
  let checker = validateInput(size);
  if(!checker) return;
  elements.popOver.hidePopover();
  gridRender(size, elements.gridContainer) 
  handleHover(elements.gridContainer)
}
