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
		colorPicker: document.querySelector("#color__picker"),
		eraserBtn: document.querySelector(".eraser__btn"),
		gridSlider: document.querySelector("#grid__slider"),
		sliderSpan: document.querySelector(".slider__span"),
	};
}

export function listeners() {
	elements.promptButton.addEventListener("click", clearInputs);
	elements.submitBtn.addEventListener("click", handlePrompt);
	elements.clearBtn.addEventListener("click", handleInit);
	elements.rainbowBtn.addEventListener("click", handleRainbow);
	elements.eraserBtn.addEventListener("click", handleEraser);
	elements.colorPicker.addEventListener("input", handleColorPicker);
	elements.gridSlider.addEventListener("input", handleSlider);
}

export function handleColorPicker(event) {
	state.DEFAULT_COLOR = event.target.value;
	handleHover();
}

export function handleEraser() {
	elements.eraserBtn.classList.toggle("active__btn");
	elements.rainbowBtn.classList.remove("active__btn");
	state.IS_RAINBOW = false;
	state.IS_ERASER = !state.IS_ERASER;
	handleHover();
}

export function handleRainbow() {
	elements.rainbowBtn.classList.toggle("active__btn");
	elements.eraserBtn.classList.remove("active__btn");
	state.IS_RAINBOW = !state.IS_RAINBOW;
	state.IS_ERASER = false;
}

export function handleHover() {
	let cells = elements.gridContainer.querySelectorAll(".grid__cell");
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", (events) => {
			if (state.IS_RAINBOW) {
				const randomR = Math.floor(Math.random() * 256);
				const randomG = Math.floor(Math.random() * 256);
				const randomB = Math.floor(Math.random() * 256);
				cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
			} else if (state.IS_ERASER) {
				cell.style.backgroundColor = "#f7f7f7";
			} else {
				cell.style.backgroundColor = state.DEFAULT_COLOR;
			}
		});
	});
}

export function handleInit() {
	gridRender(state.GRID_SIZE, elements.gridContainer);
	handleHover();
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
	state = initState();
	state.GRID_SIZE = size;
	elements.colorPicker.value = state.DEFAULT_COLOR;
	// localStorage.setItem("size", size);
	elements.popOver.hidePopover();
	gridRender(state.GRID_SIZE, elements.gridContainer);
	handleHover();
}

export function handleSlider(e) {
	elements.sliderSpan.textContent = `${e.target.value}x${e.target.value}`;
	state.GRID_SIZE = e.target.value;
	gridRender(state.GRID_SIZE, elements.gridContainer);
	handleHover();
}
