import '/src/css/style.css'
import { init } from './utils'
import { gridInit } from './grid';
import { hoverCell } from './control';

document.addEventListener("DOMContentLoaded", (event) => {
  const elements = init();
  console.log(elements);
  gridInit(elements.gridContainer)
  hoverCell(elements.gridContainer)

  console.log("hello")
})

