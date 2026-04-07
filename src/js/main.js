import '/src/css/style.css'
import { elementsInit, handlePrompt, handleInit } from './handlers';

document.addEventListener("DOMContentLoaded", (event) => {
  handleInit()

  let elements = elementsInit()
  elements.promptButton.addEventListener("click", handlePrompt)
})

