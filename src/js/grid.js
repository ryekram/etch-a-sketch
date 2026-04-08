export function gridRender(size = 16, container) {
  let finalSize;
  let storageChecker = localStorage.getItem("size");
  if (storageChecker) {
    finalSize = storageChecker;
  } else {
    localStorage.setItem("size", size);
    finalSize = size;
  }

  const boardSize = 512;
  const cellSize = boardSize / finalSize;
  container.textContent = "";
  container.style.width = `${boardSize}px`;
  container.style.height = `${boardSize}px`;

  for (let index = 0; index < finalSize * finalSize; index++) {
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.classList.add("grid__cell");
    container.append(cell);
  }
}
