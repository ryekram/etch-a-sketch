import '/src/css/style.css'
import { init } from './utils'
import { gridInit } from './grid';

document.addEventListener("DOMContentLoaded", (event) => {
  const elements = init();
  console.log(elements);
  gridInit(elements.gridContainer)

  console.log("hello")
})

