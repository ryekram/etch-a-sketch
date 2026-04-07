export function gridRender(size = 16, container) {
    container.textContent = '';
    container.style.width = `${size * size}px`
    for (let index = 0; index < (size * size); index++) {
        const cell = document.createElement("div")
        cell.style.width = `${size}px`;
        cell.style.height = `${size}px`;
        cell.classList.add("grid__cell")
        container.append(cell)
    }
}


export function customGrid(gridSize) {

}
