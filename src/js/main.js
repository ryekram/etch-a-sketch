import '/src/css/style.css'
import { elementsInit, handlePrompt, handleInit, clearInputs } from './handlers';

document.addEventListener("DOMContentLoaded", (event) => {
  handleInit()

  let elements = elementsInit()
  elements.promptButton.addEventListener('click', clearInputs)
  elements.submitBtn.addEventListener("click", handlePrompt)
})

