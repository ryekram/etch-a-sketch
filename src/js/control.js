export function hoverCell(elements) {
  let cells = elements.querySelectorAll(".grid__cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (events) => {
      cell.style.background = "#cff2bd";
    });
  });
}
