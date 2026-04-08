import { gridRender } from "./grid";
import { initState } from "./utils";
let elements = elementsInit();
let state = initState();

export function elementsInit() {
  return {
    gridContainer: document.querySelector(".grid__container"),
    promptButton: document.querySelector(".prompt__button"),
    popOver: document.querySelector("#mypopover"),
    inputSize: document.querySelector("#input__size"),
    submitBtn: document.querySelector(".submit__btn"),
    errorSpan: document.querySelector(".error__size-span"),
    clearBtn: document.querySelector(".clear__btn"),
    rainbowBtn: document.querySelector(".rainbow__btn"),
    eraserBtn: document.querySelector(".eraser__btn"),
  };
}

export function listeners() {
  elements.promptButton.addEventListener("click", clearInputs);
  elements.submitBtn.addEventListener("click", handlePrompt);
  elements.clearBtn.addEventListener("click", handleInit);
  elements.rainbowBtn.addEventListener("click", handleRainbow);
  elements.eraserBtn.addEventListener("click", handleEraser);
}

export function handleEraser() {
  state.IS_RAINBOW = false;
  state.DEFAULT_COLOR = '#f7f7f7';
  handleHover(elements.gridContainer)
  console.log(state, 'eraser');
}


export function handleRainbow() {
  console.log(state.IS_RAINBOW);
  if (state.IS_RAINBOW) {
    state.IS_RAINBOW = false;
  } else {
    state.IS_RAINBOW = true;
  }
}

export function handleHover(elements, color = state.DEFAULT_COLOR) {
  let cells = elements.querySelectorAll(".grid__cell");
  console.log(state);
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (events) => {
      if (state.IS_RAINBOW) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else {
        cell.style.backgroundColor = color;
      }
    });
  });
}

export function handleInit() {
  // state = initState();
  state.DEFAULT_COLOR = "#adadad"
  gridRender(undefined, elements.gridContainer);
  handleHover(elements.gridContainer);
  listeners();
}

export function validateInput(size) {
  if (!size || isNaN(size)) {
    elements.inputSize.style.border = "1px solid #ff7575";
    elements.errorSpan.textContent = "Please input a valid number";
    return false;
  }
  if (size >= 100 || size <= 0) {
    elements.inputSize.style.border = "1px solid #ff7575";
    elements.errorSpan.textContent =
      "Please input value below 100 or greater than 0";
    return false;
  }
  return true;
}

export function clearInputs() {
  elements.inputSize.style.border = "none";
  elements.inputSize.value = "";
  elements.errorSpan.textContent = "";
}

export function handlePrompt() {
  let size = elements.inputSize.value;
  let checker = validateInput(size);
  if (!checker) return;
  state = initState()
  localStorage.setItem("size", size);
  elements.popOver.hidePopover();
  gridRender(size, elements.gridContainer);
  handleHover(elements.gridContainer);
}
