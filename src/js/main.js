import '/src/css/style.css'
import { elementsInit, handlePrompt, handleInit, clearInputs } from './handlers';
import { gridRender } from './grid';

document.addEventListener("DOMContentLoaded", (event) => {
  handleInit()

  let elements = elementsInit()
  elements.promptButton.addEventListener('click', clearInputs)
  elements.submitBtn.addEventListener("click", handlePrompt)
  elements.clearBtn.addEventListener("click", handleInit)
})

