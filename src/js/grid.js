export function gridRender(size, container) {
  const boardSize = 512;
  const cellSize = boardSize / size;
  container.textContent = "";
  container.style.width = `${boardSize}px`;
  container.style.height = `${boardSize}px`;

  for (let index = 0; index < size * size; index++) {
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.classList.add("grid__cell");
    container.append(cell);
  }
}
